import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import aboutBoxImage from '../assets/aboutBox.png';

const aboutBoxMap = new THREE.TextureLoader().load(aboutBoxImage)

const AboutBox = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX

  const handleOnClick = () => {
    props.setOpenAbout(!props.openAbout)
  }

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => {handleOnClick()}}
      onPointerOver={(event) => setActive(true)}
      onPointerOut={(event) => setActive(false)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={aboutBoxMap} />
    </mesh>
  )
}

export default AboutBox
