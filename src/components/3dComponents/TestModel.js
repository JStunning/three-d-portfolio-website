import React, { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const TestModel = (props) => {
  const gltf = useLoader(GLTFLoader, props.modelGLTF);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} position={props.position} scale={props.scale} />
    </Suspense>
  )
}

export default TestModel

