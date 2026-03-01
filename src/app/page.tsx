"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere, Float, PerspectiveCamera } from "@react-three/drei";

export default function Home() {
  return (
    <main className="h-screen w-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* 3D Сцена на заднем плане */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          
          {/* Освещение: ambient для общей яркости и directional для теней/бликов */}
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
          <directionalLight position={[-5, 5, 5]} intensity={1} />

          {/* Плавающая "живая" сфера SyncV */}
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={1.8}>
              <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.4}
                speed={4}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>

          {/* Позволяет крутить сферу мышкой, но отключает зум, чтобы не ломать верстку */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Текстовый контент поверх 3D (Z-index 10) */}
      <div className="z-10 text-center px-4 pointer-events-none">
        <h1 className="text-8xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
          SyncV
        </h1>
        <p className="text-blue-400 text-2xl font-light mb-10 tracking-widest uppercase">
          Video Distribution Redefined
        </p>
        
        {/* Кнопка с эффектом стекла (Glassmorphism) */}
        <div className="pointer-events-auto">
          <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 shadow-xl">
            Launch Platform
          </button>
        </div>
      </div>

      {/* Маленькая плашка внизу для солидности (грант любит детали) */}
      <div className="absolute bottom-10 text-slate-500 text-sm font-mono">
        v.1.0.0-beta // Secure Video Pipeline
      </div>
    </main>
  );
}