import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import '../assets/styles.css';

const About = ({ openAbout, setOpenAbout}) => {
  return (
    <Card className='cardContainer' style={{backgroundColor: "black"}}>
      <h2><u>About</u></h2>
      <CardContent className='cardContent'>
          <p>Hi, I'm Jack Dunning.</p><br />
          <p>I'm a Software Engineer currently looking for a job in Seattle or something I can do remote. </p><br />
          <p>I have passion for writing clean, effecient code and creating intuitive, dynamic user experiences.</p><br />
          <p>Interested in working together? Feel free to contact me for any project or collaboration.</p><br />
      </CardContent>
      <h3 className='cardClose' onClick={() => setOpenAbout(!openAbout)}>X</h3>
    </Card>
  )
}

export default About
