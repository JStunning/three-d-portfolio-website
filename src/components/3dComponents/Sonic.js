import React, { Suspense, useRef, useState, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF  } from '@react-three/drei';

const Sonic = (props) => {
  const [name, setName] = useState("sc_run_loop_Armature_0")
  const gltf = useLoader(GLTFLoader, props.modelGLTF);

  const mesh = useRef()
  const group = useRef();

  const { nodes, materials, animations } = useGLTF( props.modelGLTF)
  const { actions } = useAnimations(animations, mesh)

  useFrame((state, delta) => (group.current.rotation.y += .01));

  useEffect(() => {
    actions[name].reset().fadeIn(0.5).play()
    return () => actions[name].fadeOut(0.5)
  }, [name, actions])

  return (
    <Suspense fallback={null}>
      <group ref={group} position={[60, 0, -30]}>
        <mesh ref={mesh} position={props.position} scale={props.scale} rotation={[0, 3.15, 0]} >
          <primitive object={gltf.scene}  />
          <meshStandardMaterial attach='material' />
        </mesh>
      </group>
    </Suspense>
  )
}

export default Sonic