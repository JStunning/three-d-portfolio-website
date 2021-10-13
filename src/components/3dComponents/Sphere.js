import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

const Sphere = (props) => {
  const sphereMesh = useRef()

  useFrame((state, delta) => (sphereMesh.current.rotation.x += 0.01))

  return (
    <mesh position={props.position} ref={sphereMesh}>
      <sphereBufferGeometry attach='geometry' args={props.size} />
      <meshLambertMaterial attach='material' color={props.color} />
    </mesh>
  )
}

export default Sphere
