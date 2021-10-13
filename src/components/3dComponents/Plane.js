import React from 'react'
import * as THREE from 'three'
import chessMap from '../assets/chessBoard.png'

const planeChessMap = new THREE.TextureLoader().load(chessMap)

const Plane = () => {
  return (
    <mesh position={[0,-10,-10]} rotation={[-Math.PI / 2, 0, 0]} >
      <planeBufferGeometry attach='geometry' args={[180,90]} />
      <meshLambertMaterial attach='material' />
      <meshStandardMaterial map={planeChessMap} />
    </mesh>
  )
}

export default Plane
