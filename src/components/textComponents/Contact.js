import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import '../assets/styles.css';

const Contact = ({ openContact, setOpenContact}) => {
  return (
    <Card className='cardContainer' style={{backgroundColor: "black"}}>
      <h2><u>Jack Dunning</u></h2>
      <CardContent className='cardContent contactContent'>
        <p><strong>Location:</strong> <br /> Seattle, WA, USA</p>
        <p><strong>Email:</strong> <br /> JackStunning9001@gmail.com</p>
        <p><strong>LinkedIn:</strong> <br /> <a href="https://www.linkedin.com/in/jackstunning/" className="contactLink">https://www.linkedin.com/in/jackstunning/</a></p>
        <p><strong>Github:</strong> <br /> <a href="https://github.com/JackStunning" className="contactLink">https://github.com/JackStunning</a></p>
      </CardContent>
      <h3 className='cardClose' onClick={() => setOpenContact(!openContact)}>X</h3>
    </Card>
  )
}

export default Contact
