import React, { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';

const Saturn = (props) => {
  const gltf = useLoader(GLTFLoader, props.modelGLTF);

  const mesh = useRef()

  useFrame((state, delta) => (mesh.current.rotation.y += -.0025));

  return (
    <Suspense fallback={null}>
        <mesh ref={mesh} position={props.position} scale={props.scale} rotation={[0, 3.15, 0]} >
          <primitive object={gltf.scene}  />
          <meshStandardMaterial attach='material' />
        </mesh>
    </Suspense>
  )
}

export default Saturn