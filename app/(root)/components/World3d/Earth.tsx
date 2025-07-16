// src/components/Earth.tsx (o EarthModel.tsx, el archivo de tu componente Model)

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { JSX, useEffect, useRef } from "react";
import * as THREE from "three";

type ModelProps = JSX.IntrinsicElements["group"];

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/models/scene.gltf") as unknown as {
    nodes: {
      Object_2: THREE.Mesh;
      Object_3: THREE.Mesh;
      Object_4: THREE.Mesh;
    };
    materials: {
      matairport_material: THREE.Material;
      matsurface_material: THREE.Material;
    };
  };
  const ref = useRef<THREE.Group>(null!);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002; // velocidad de rotación
    }
  });

  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  useEffect(() => {
    function checkScreen(): void {
      setIsMobile(window.innerWidth < 768);
    }

    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <group
      {...props}
      ref={ref}
      dispose={null}
      scale={isMobile ? [2, 2, 2] : [3, 3, 3]}
      rotation={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.matairport_material}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.matairport_material}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.matsurface_material}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/scene.gltf"); // Asegúrate de que esta ruta sea la correcta
