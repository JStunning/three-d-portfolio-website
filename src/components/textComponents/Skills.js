import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import '../assets/styles.css';

const Skills = ({ openSkills, setOpenSkills }) => {
  return (
    <Card className='cardContainer' style={{backgroundColor: "black"}}>
      <h2><u>Skills</u></h2>
      <CardContent className='cardContent' >
        <Card className="skillCard">
          <CardContent className="container">
            <Typography className="skillHeader" variant='h4'>Javascript</Typography>
            <div className="row">
              <div className="col" >
                <img src="https://i.imgur.com/pECjwjO.jpeg" alt="es6 logo"></img>
                <Typography className="skillContent" ><b>ES6</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/xi6jceC.png" alt="react logo"></img>
                <Typography className="skillContent col-4" ><b>React</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/MllZeZO.png" alt="node logo"></img>
                <Typography className="skillContent col-4" ><b>Node</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/StGWz0E.png" alt="jQuery logo"></img>
                <Typography className="skillContent col-4" ><b>jQuery</b></Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="skillCard">
          <CardContent className="container">
            <Typography className="skillHeader" variant="h4">HTML</Typography>
            <div className="row">
            <div className="col">
                <img src="https://i.imgur.com/O6cKBc5.png" alt="HTML5 logo"></img>
                <Typography className="skillContent col-4" ><b>HTML5</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/xi6jceC.png" alt="JSX logo"></img>
                <Typography className="skillContent col-4" ><b>JSX</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/4J2cNGD.jpeg" alt="ASP.NET logo"></img>
                <Typography className="skillContent col-4" ><b>ASP.NET</b></Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="skillCard">
          <CardContent className="container">
            <Typography className="skillHeader" variant="h4">CSS</Typography>
            <div className="row">
            <div className="col">
                <img src="https://i.imgur.com/HFKoh3y.png" alt="CSS5 logo"></img>
                <Typography className="skillContent col-4" ><b>CSS3</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/2iRkUPy.png" alt="Sass logo"></img>
                <Typography className="skillContent col-4" ><b>SASS</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/H3iIy8b.png" alt="material ui logo"></img>
                <Typography className="skillContent col-4" ><b>Material UI</b></Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="skillCard">
          <CardContent className="container">
            <Typography className="skillHeader" variant="h4">C#</Typography>
            <div className="row">
              <div className="col">
                <img src="https://i.imgur.com/4J2cNGD.jpeg" alt=".Net logo"></img>
                <Typography className="skillContent col-4" ><b>.Net</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/COwOFyy.jpeg" alt="Unity logo"></img>
                <Typography className="skillContent col-4" ><b>Unity</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/4J2cNGD.jpeg" alt="MVC logo"></img>
                <Typography className="skillContent col-4" ><b>MVC</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/4J2cNGD.jpeg" alt="Razor logo"></img>
                <Typography className="skillContent col-4" ><b>Razor</b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/4J2cNGD.jpeg" alt="Entity logo"></img>
                <Typography className="skillContent col-4" ><b>Entity Framework</b></Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="skillCard">
          <CardContent className="container">
            <Typography className="skillHeader" variant="h4">Back End</Typography>
            <div className="row">
              <div className="col">
                <img src="https://i.imgur.com/qZEpu1S.png" alt="GraphQL logo"></img>
                <Typography className="skillContent col-4" ><b>GraphQL </b></Typography>
              </div>
              <div className="col" >
                <img src="https://i.imgur.com/z1pLC5E.jpeg" alt="MySQL logo"></img>
                <Typography className="skillContent col-4" ><b> MySQL </b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/wGFR0ms.jpeg" alt="MongoDB logo"></img>
                <Typography className="skillContent col-4" ><b> MongoDB </b></Typography>
              </div>
              <div className="col">
                <img src="https://i.imgur.com/ElCDWZb.png" alt="Postman logo"></img>
                <Typography className="skillContent col-4" ><b>Postman</b></Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <h3 className='cardClose' onClick={() => setOpenSkills(!openSkills)}>X</h3>
    </Card>
  )
}

export default Skills

