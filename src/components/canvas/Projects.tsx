"use client";

import { useRef, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import type { ProjectData } from "@/lib/data";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
  activeIndex: number;
  onClick: () => void;
}

function ProjectCard({
  project,
  index,
  total,
  activeIndex,
  onClick,
}: ProjectCardProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const offset = index - activeIndex;
  const isActive = index === activeIndex;

  useFrame(() => {
    if (!groupRef.current) return;

    const targetX = offset * 4.5;
    const targetZ = isActive ? 0 : -1.5;
    const targetRotY = offset * -0.3;
    const targetScale = isActive ? 1 : 0.85;

    groupRef.current.position.x +=
      (targetX - groupRef.current.position.x) * 0.08;
    groupRef.current.position.z +=
      (targetZ - groupRef.current.position.z) * 0.08;
    groupRef.current.rotation.y +=
      (targetRotY - groupRef.current.rotation.y) * 0.08;

    const s = groupRef.current.scale.x;
    const newS = s + (targetScale - s) * 0.08;
    groupRef.current.scale.set(newS, newS, newS);
  });

  return (
    <group ref={groupRef}>
      {/* Glow plane behind the card */}
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[4, 5.2]} />
        <meshStandardMaterial
          color="#0070f3"
          emissive="#0070f3"
          emissiveIntensity={isActive && hovered ? 0.3 : isActive ? 0.15 : 0.05}
          transparent
          opacity={isActive ? 0.15 : 0.05}
        />
      </mesh>

      {/* HTML card content */}
      <Html
        transform
        distanceFactor={3}
        position={[0, 0, 0.01]}
        className="pointer-events-auto"
      >
        <div
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: 360,
            padding: 36,
            background: isActive
              ? "rgba(10, 10, 10, 0.85)"
              : "rgba(10, 10, 10, 0.6)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${isActive ? "rgba(0, 112, 243, 0.4)" : "rgba(0, 112, 243, 0.15)"
              }`,
            borderRadius: 16,
            cursor: "pointer",
            transition: "border-color 0.3s, box-shadow 0.3s",
            boxShadow: hovered
              ? "0 0 30px rgba(0, 112, 243, 0.3)"
              : "none",
            userSelect: "none",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontFamily: "monospace",
              color: "#00BFFF",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Project
          </p>
          <h3
            style={{
              margin: "8px 0 0",
              fontSize: 24,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: 14,
              lineHeight: 1.6,
              color: "#aaaaaa",
            }}
          >
            {project.description}
          </p>
          <div
            style={{
              marginTop: 16,
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "3px 10px",
                  fontSize: 12,
                  fontFamily: "monospace",
                  color: "#0070f3",
                  border: "1px solid rgba(0, 112, 243, 0.3)",
                  borderRadius: 999,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Html>
    </group>
  );
}

interface ProjectsCarouselProps {
  projects: ProjectData[];
  onSelect?: (project: ProjectData) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function ProjectsCarousel({
  projects,
  onSelect,
  activeIndex,
  setActiveIndex,
}: ProjectsCarouselProps) {
  const handleClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      onSelect?.(projects[index]);
    },
    [setActiveIndex, onSelect, projects]
  );

  return (
    <group position={[0, 0, 0]}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
          activeIndex={activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </group>
  );
}
