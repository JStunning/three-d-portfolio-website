import React, { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';

const CustomModel = (props) => {
  const gltf = useLoader(GLTFLoader, props.modelGLTF);

  const mesh = useRef()

  return (
    <Suspense fallback={null}>
      <mesh ref={mesh} position={props.position} scale={props.scale} >
        <primitive object={gltf.scene}  />
        <meshStandardMaterial attach='material' />
      </mesh>
    </Suspense>
  )
}

export default CustomModel