/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber';
import React from 'react';
import { useRef } from 'react';
import { Mesh, MeshBasicMaterial, TorusGeometry } from 'three';
export default function Torus(props) {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.y += 0.002;
    cubeRef.current.rotation.x += 0.004;
  });

  return (
    <>
      <mesh ref={cubeRef}>
        <torusGeometry args={[1.2, 0.4, 40, 40]} />
        <meshBasicMaterial wireframe={true} color="blue" />
      </mesh>
    </>
  );
}
