import React from 'react'

const Cylinder = (props) => {
  return (
    <mesh {...props}>
      <cylinderBufferGeometry attach='geometry' args={[1.5,1.5,25,32]} />
      <meshLambertMaterial attach='material' />
    </mesh>
  )
}

export default Cylinder
