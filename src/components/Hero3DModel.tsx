// src/components/Hero3DModel.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect } from "react";

const TechGlobe = () => {
  const globeRef = useRef<THREE.Mesh | null>(null);
  const yellowArcsRef = useRef<THREE.Group | null>(null);
  const purpleArcsRef = useRef<THREE.Group | null>(null);

  useFrame((state, delta) => {
    if (globeRef.current) globeRef.current.rotation.y += delta * 0.3;
    if (yellowArcsRef.current) yellowArcsRef.current.rotation.y += delta * 0.35;
    if (purpleArcsRef.current) purpleArcsRef.current.rotation.y -= delta * 0.30;
  });

  return (
    <group scale={0.85}> {/* 🔥 Global scale reduce */}
      
      {/* 🌍 Main Wireframe Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.0, 42, 42]} />
        <meshBasicMaterial
          wireframe
          color="#c084fc"
          opacity={0.85}
          transparent
        />
      </mesh>

      {/* 🟡 Yellow Circular Arcs */}
      <group ref={yellowArcsRef}>
        {[0, Math.PI / 2, Math.PI].map((rot, i) => (
          <mesh key={i} rotation={[rot, 0, 0]}>
            <torusGeometry args={[1.05, 0.02, 16, 150]} />
            <meshBasicMaterial
              color="#facc15"
              emissiveIntensity={1.5}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      {/* 🟣 Purple Floating Arcs */}
      <group ref={purpleArcsRef}>
        {[Math.PI / 3, (2 * Math.PI) / 3].map((rot, i) => (
          <mesh key={i} rotation={[0, rot, Math.PI / 4]}>
            <torusGeometry args={[1.15, 0.018, 14, 120]} />
            <meshBasicMaterial
              color="#a855f7"
              emissiveIntensity={1.8}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

    </group>
  );
};

const Hero3DModel = () => {
  useEffect(() => {
    const dpr = Math.min(window.devicePixelRatio, 1.6);
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setPixelRatio(dpr);
    }
  }, []);

  return (
    <div className="w-full h-[250px] sm:h-[330px] md:h-[400px] lg:h-[480px] xl:h-[520px]">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <ambientLight intensity={0.45} />
        <pointLight position={[4, 4, 4]} intensity={1} />

        <TechGlobe />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Hero3DModel;
