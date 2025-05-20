"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

/*
  CertificateMesh: carga `textureUrl` en una malla plana para renderizar el certificado 3D.
*/
function CertificateMesh({ textureUrl }: { textureUrl: string }) {
  const texture = useTexture(textureUrl);
  return (
    <mesh>
      <planeGeometry args={[8, 6]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

/*
  Certificate3D: renderiza un canvas con aspect ratio 90% para ocupar casi todo el ancho del contenedor.
  La cámara se posiciona para que la malla llene el espacio disponible.
*/
export default function Certificate3D() {
  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "90%" }}>
      <Canvas style={{ position: "absolute", top: 0, left: 0 }} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <CertificateMesh textureUrl="/certificates/certificate.jpg" />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
