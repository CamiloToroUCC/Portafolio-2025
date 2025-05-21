"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface Certificate3DProps {
  textureUrl: string;
  offset?: { x: number; y: number; z: number };
}

function CertificateMesh({
  textureUrl,
  offset,
}: {
  textureUrl: string;
  offset?: { x: number; y: number; z: number };
}) {
  if (!textureUrl) {
    console.error("No textureUrl provided");
    return null;
  }

  const texture = useTexture(textureUrl);
  const aspect = texture.image ? texture.image.width / texture.image.height : 16 / 9;
  const width = 8;
  const height = width / aspect;

  // Convertimos offset a un tuple de 3 números
  const positionOffset: [number, number, number] = offset ? [offset.x, offset.y, offset.z] : [0, 0, 0];

  return (
    <mesh position={positionOffset}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} toneMapped={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function Certificate3D({ textureUrl, offset }: Certificate3DProps) {
  const controlsRef = useRef<any>(null);

  if (!textureUrl) {
    console.error("textureUrl undefined in Certificate3D");
    return <div>Texture not found</div>;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "75%", // aspecto fijo 4:3
        overflow: "visible",
      }}
    >
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
        camera={{ position: [0, 0, 10], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <CertificateMesh textureUrl={textureUrl} offset={offset} />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          makeDefault
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}
