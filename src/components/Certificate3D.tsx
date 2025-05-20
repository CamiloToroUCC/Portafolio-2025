"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

function CertificateMesh({ textureUrl }: { textureUrl: string }) {
  const texture = useTexture(textureUrl);
  return (
    <mesh>
      {/* Usamos un tamaño mayor para que la malla llene el canvas */}
      <planeGeometry args={[8, 6]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

export default function Certificate3D() {
  return (
    // Contenedor con aspect ratio 4:3 para que el canvas ocupe casi todo el ancho del card
    <div style={{ position: "relative", width: "100%", paddingTop: "75%" }}>
      <Canvas
        style={{ position: "absolute", top: 0, left: 0 }}
        camera={{ position: [0, 0, 10] }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {/* Utiliza la ruta especificada */}
          <CertificateMesh textureUrl="/certificates/certificate.jpg" />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
