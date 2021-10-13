import React from 'react'

const Tetrahedron = (props) => {
  return (
    <mesh {...props}>
      <tetrahedronBufferGeometry attach='geometry' args={[19,0]} />
      <meshLambertMaterial attach='material' color='gold' />
    </mesh>
  )
}

export default Tetrahedron
