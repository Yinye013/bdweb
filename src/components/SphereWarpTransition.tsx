import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { Sphere } from "@react-three/drei";

interface WarpSphereProps {
  isActive: boolean;
  onComplete: () => void;
}

function WarpSphere({ isActive, onComplete }: WarpSphereProps) {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const [progress, setProgress] = useState(0);

  useFrame((_, delta) => {
    if (isActive && sphereRef.current) {
      setProgress((prev) => {
        const newProgress = prev + delta * 2;
        if (newProgress > 1.2) {
          setTimeout(() => onComplete(), 100);
        }
        return newProgress;
      });

      // Scale up the sphere
      const scale = progress * 20;
      sphereRef.current.scale.setScalar(scale);

      // Add rotation
      sphereRef.current.rotation.x += delta * 3;
      sphereRef.current.rotation.y += delta * 2;

      // Modify material
      if (sphereRef.current.material instanceof THREE.MeshStandardMaterial) {
        sphereRef.current.material.opacity = Math.max(0, 1 - progress * 2);
      }
    }
  });

  return (
    <Sphere ref={sphereRef} args={[0.5, 32, 32]}>
      <meshStandardMaterial
        color="#1e3a8a"
        transparent
        wireframe={progress > 0.5}
      />
    </Sphere>
  );
}

interface SphereWarpTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

export default function SphereWarpTransition({
  isActive,
  onComplete,
}: SphereWarpTransitionProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#060010]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Canvas
            camera={{ position: [0, 0, 5] }}
            style={{ background: "#060010" }}
          >
            <color attach="background" args={["#060010"]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <WarpSphere isActive={isActive} onComplete={onComplete} />
          </Canvas>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
