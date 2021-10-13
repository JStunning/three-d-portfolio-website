import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import contactBoxImage from '../assets/contactBoxV3.png';

const contactBoxMap = new THREE.TextureLoader().load(contactBoxImage)

const ContactBox = (props) => {
  // This reference will give us direct access to the mesh
  const contactBoxMesh = useRef()
  // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (contactBoxMesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX

  const handleOnClick = () => {
    props.setOpenContact(!props.openContact)
  }

  return (
    <mesh
      {...props}
      ref={contactBoxMesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => {handleOnClick()}}
      onPointerOver={(event) => setActive(true)}
      onPointerOut={(event) => setActive(false)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={contactBoxMap} />
    </mesh>
  )
}

export default ContactBox