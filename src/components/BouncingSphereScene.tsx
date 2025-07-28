import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls, Plane } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function BouncingSphereScene() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[0, 10, 2]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={20}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <BouncingSphere />
        {/* Invisible ground for shadows */}
        <Plane
          args={[10, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2.5, 0]}
          receiveShadow
        >
          <shadowMaterial opacity={1} color="white" />
        </Plane>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

function BouncingSphere() {
  const sphereRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "power1.inOut" },
    });

    // Start from ground level and bounce up
    sphereRef.current.position.y = -2;

    tl.to(sphereRef.current.position, {
      y: 2,
      duration: 0.6,
    });
  }, []);

  return (
    <Sphere ref={sphereRef} args={[0.5, 32, 32]} castShadow>
      <meshStandardMaterial color="#1e3a8a" />
    </Sphere>
  );
}
