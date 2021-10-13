import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import { Canvas } from '@react-three/fiber'
import App from './App';
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from 'react';

function Loader() {
  const { progress } = useProgress()
  return <Html style={{color: 'green'}} center>{progress}% <br />loaded</Html>
}

ReactDOM.render(
  <>
    <Canvas style={{position: 'fixed', top: '0', left: '0', backgroundColor: 'black'}} camera={{ position: [0, 4, 9]}} >
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Canvas>
  </>,
  document.getElementById('root')
)

