import React, { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';

const Futurama = (props) => {
  const gltf = useLoader(GLTFLoader, props.modelGLTF);

  const mesh = useRef()
  const group = useRef();

  useFrame((state, delta) => (group.current.rotation.y += -.001));
  // useFrame((state, delta) => (group.current.rotation.x += -.0002));
  // useFrame((state, delta) => (group.current.rotation.z += .002));

  return (
    <Suspense fallback={null}>
      <group ref={group} position={[0,0,0]}>
        <mesh ref={mesh} position={props.position} scale={props.scale} rotation={[0, 0, 0]} >
          <primitive object={gltf.scene}  />
          <meshStandardMaterial attach='material' />
        </mesh>
      </group>
    </Suspense>
  )
}

export default Futurama