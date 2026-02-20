"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";
import type { SkillNode } from "@/lib/data";

interface SkillSphereProps {
  skill: SkillNode;
  index: number;
  total: number;
  radius: number;
  speed: number;
}

function SkillSphere({ skill, index, total, radius, speed }: SkillSphereProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const angle = (index / total) * Math.PI * 2;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    groupRef.current.position.x = Math.cos(t) * radius;
    groupRef.current.position.z = Math.sin(t) * radius;
    groupRef.current.position.y =
      Math.sin(t * 2 + index) * 0.5;
  });

  const scale = hovered ? 1.3 : 1;
  const size = 0.15 + (skill.level / 100) * 0.2;

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh
          scale={scale}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[size, 16, 16]} />
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.8 : 0.3}
            transparent
            opacity={hovered ? 1 : 0.7}
          />
        </mesh>
        <Text
          position={[0, size + 0.15, 0]}
          fontSize={0.12}
          color={hovered ? "#ffffff" : "#aaaaaa"}
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter.woff"
        >
          {skill.name}
        </Text>
      </Float>
    </group>
  );
}

interface SkillsOrbitProps {
  data: SkillNode[];
  radius?: number;
  speed?: number;
}

export default function SkillsOrbit({
  data,
  radius = 3,
  speed = 0.15,
}: SkillsOrbitProps) {
  return (
    <group>
      {data.map((skill, index) => (
        <SkillSphere
          key={skill.name}
          skill={skill}
          index={index}
          total={data.length}
          radius={radius}
          speed={speed}
        />
      ))}
      {/* Central glow */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#0070f3"
          emissive="#0070f3"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}
