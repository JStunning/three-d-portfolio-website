import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import projectsBoxImage from '../assets/projectsBox.png';

const projectsBoxMap = new THREE.TextureLoader().load(projectsBoxImage)

const ProjectsBox = (props) => {
  // This reference will give us direct access to the mesh
  const projectsBoxMesh = useRef()
  // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (projectsBoxMesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX

  const handleOnClick = () => {
    props.setOpenProjects(!props.openProjects)
  }

  return (
    <mesh
      {...props}
      ref={projectsBoxMesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => {handleOnClick()}}
      onPointerOver={(event) => setActive(true)}
      onPointerOut={(event) => setActive(false)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={projectsBoxMap} />
    </mesh>
  )
}

export default ProjectsBox