import React, { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';

const MobiusStrip = (props) => {
  const gltf = useLoader(GLTFLoader, props.modelGLTF);

  const mesh = useRef()

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  useFrame((state, delta) => (mesh.current.rotation.y += 0.02));

  return (
    <Suspense fallback={null}>
      <mesh ref={mesh} position={props.position} scale={props.scale} >
        <primitive object={gltf.scene}  />
        <meshStandardMaterial attach='material' />
      </mesh>
    </Suspense>
  )
}

export default MobiusStrip
