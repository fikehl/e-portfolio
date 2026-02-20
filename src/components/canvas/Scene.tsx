"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";

interface SceneProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Scene({ children, className }: SceneProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#0070f3" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#00BFFF" />
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
