"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

/*
  CertificateMesh: carga la textura desde la URL y la aplica a una malla plana.
  Se establece side: THREE.DoubleSide para que la imagen se muestre en ambas caras.
*/
function CertificateMesh({ textureUrl }: { textureUrl: string }) {
  const texture = useTexture(textureUrl);
  return (
    <mesh>
      <planeGeometry args={[8, 6]} />
      <meshBasicMaterial 
        map={texture} 
        toneMapped={false} 
        side={THREE.DoubleSide}  // Permite ver la textura en ambos lados
      />
    </mesh>
  );
}

/*
  Certificate3D: renderiza un canvas con un aspect ratio adecuado.
  Se limita el OrbitControls para que solo gire horizontalmente.
*/
export default function Certificate3D() {
  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "90%" }}>
      <Canvas style={{ position: "absolute", top: 0, left: 0 }} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <CertificateMesh textureUrl="/certificates/certificate.jpg" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
