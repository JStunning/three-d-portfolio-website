import React, { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';

const MysteryMachine = (props) => {
  const gltf = useLoader(GLTFLoader, props.modelGLTF);

  const mesh = useRef()
  const group = useRef();

  useFrame((state, delta) => (group.current.rotation.y += -.005));

  return (
    <Suspense fallback={null}>
      <group ref={group} position={[0,0,-20]}>
        <mesh ref={mesh} position={props.position} scale={props.scale} rotation={[0, 3.15, 0]} >
          <primitive object={gltf.scene}  />
          <meshStandardMaterial attach='material' />
        </mesh>
      </group>
    </Suspense>
  )
}

export default MysteryMachine
