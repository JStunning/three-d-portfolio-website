import React, { Suspense, useRef, useState, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF  } from '@react-three/drei';

const Playstation = (props) => {
  const [name, setName] = useState("Take 001")
  const gltf = useLoader(GLTFLoader, props.modelGLTF);

  const mesh = useRef()
  // const group = useRef();

  const { nodes, materials, animations } = useGLTF( props.modelGLTF)
  const { actions } = useAnimations(animations, mesh)

  useEffect(() => {
    actions[name].reset().fadeIn(0.5).play()
    return () => actions[name].fadeOut(0.5)
  }, [name, actions])

  return (
    <Suspense fallback={null}>
        <mesh ref={mesh} position={props.position} scale={props.scale} rotation={[0, .9, 0]} >
          <primitive object={gltf.scene}  />
          <meshStandardMaterial attach='material' />
        </mesh>
    </Suspense>
  )
}

export default Playstation