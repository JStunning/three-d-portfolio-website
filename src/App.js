import React, { useState } from 'react'
import { OrbitControls, Stars, Html } from "@react-three/drei"
import AboutBox from './components/3dComponents/AboutBox'
import ContactBox from './components/3dComponents/ContactBox'
import Cylinder from './components/3dComponents/Cylinder'
import Plane from './components/3dComponents/Plane'
import ProjectsBox from './components/3dComponents/ProjectsBox'
import Sphere from './components/3dComponents/Sphere'
import Tetrahedron from './components/3dComponents/Tetrahedron'
import Header from './components/textComponents/Header'
import TestModel from './components/3dComponents/TestModel'
import MobiusStrip from './components/3dComponents/MobiusStrip'
import MysteryMachine from './components/3dComponents/MysteryMachine'
import Sonic from './components/3dComponents/Sonic'
import SkillsBox from './components/3dComponents/SkillsBox'
import Swordfish from './components/3dComponents/Swordfish'
import Ufo from './components/3dComponents/Ufo'
import Futurama from './components/3dComponents/Futurama'
import Playstation from './components/3dComponents/Playstation'
import Saturn from './components/3dComponents/Saturn'

const App = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Html>
        {/* <p className="mobileMessage">does not work on mobile</p> */}
        <Header 
          openAbout={openAbout}
          setOpenAbout={setOpenAbout}
          openSkills={openSkills}
          setOpenSkills={setOpenSkills}
          openProjects={openProjects}
          setOpenProjects={setOpenProjects}
          openContact={openContact} 
          setOpenContact={setOpenContact} 
        />
      </Html>

      {/* react three fiber components */}
      <OrbitControls />
      <Stars />
      <ambientLight />
      <pointLight position={[10, 10, 5]} />

      {/* info boxes */}
      <AboutBox position={[-4, -0.5, -5]} openAbout={openAbout} setOpenAbout={setOpenAbout} />
      <SkillsBox position={[0, -0.5, -5]} openSkills={openSkills} setOpenSkills={setOpenSkills}/>
      <ProjectsBox position={[4, -0.5, -5]} openProjects={openProjects} setOpenProjects={setOpenProjects}/>
      <ContactBox position={[0, -5.5, -4]} openContact={openContact} setOpenContact={setOpenContact} />

      {/* static models */}
      <Sphere position={[0, 100, -200]} size={[66,32]} color='purple' />
      <Tetrahedron position={[0.2, -5, -64]} rotation={[2.1, 7.05, -0.01]} />
      <Cylinder position={[-50, -9, -50]} />
      <Sphere position={[-50, 7.5, -50]} size={[3.3,32]} color='red' />
      <Cylinder position={[50, -9, -50]} />
      <Sphere position={[50, 7.5, -50]} size={[3.3,32]} color='blue' />
      <TestModel position={[-15, -10, -52]} scale={[25,25,25]} modelGLTF='./lowPolyPalmV2.gltf' />
      <TestModel position={[15, -10, -52]} scale={[27,23,25]} modelGLTF='./lowPolyPalmV3.gltf' />
      <TestModel position={[18, -7, -12]} scale={[.5,.5,.5]} modelGLTF='./pawn.gltf' />
      <TestModel position={[18, -7, -7]} scale={[.5,.5,.5]} modelGLTF='./pawnBlack.gltf' />
      <TestModel position={[14, -10, -13]} scale={[.8,.8,.8]} modelGLTF='./knight.gltf' />
      <TestModel position={[20, -10, -18]} scale={[.8,.8,.8]} modelGLTF='./king.gltf' />
      <TestModel position={[-75, -10, -45]} scale={[4,4,4]} modelGLTF='./spyroV2.gltf' />
      <Plane />

      {/* moving models */}
      <Saturn position={[120, 10, -250]} scale={[.06,.06,.06]} modelGLTF='./saturnV2.gltf' />
      <MobiusStrip position={[180, 10, -150]} scale={[6,3,6]} modelGLTF='./mobiusStripV4.gltf' />
      <MobiusStrip position={[-125, -5, -210]} scale={[4,4,4]} modelGLTF='./mobiusStripV5.gltf' />
      <MysteryMachine position={[-30, -8, 5]} scale={[2,2,2]} modelGLTF='./mysteryMachine.gltf' />
      <Sonic position={[10, -9, 5]} scale={[2,2,2]} modelGLTF='./sonicV1.gltf' />
      <Swordfish position={[-150, -10, -50]} scale={[1,1,1]} modelGLTF='./swordFishV1.gltf' />
      <Ufo position={[150, 10, 50]} scale={[1,1,1]} modelGLTF='./ufoV5.gltf' />
      <Futurama position={[-160, 5, 10]} scale={[0.05,0.05,0.05]} modelGLTF='./futuramaV1.gltf' />
      <Playstation position={[-15, -10, -14]} scale={[.25,.25,.25]} modelGLTF='./playstation.gltf' />
    </>
  )
}

export default App
