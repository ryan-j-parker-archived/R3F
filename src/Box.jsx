/* eslint-disable react/no-unknown-property */
import React from 'react';
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

export default function Box() {
  return (
    <mesh position-x={5}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
