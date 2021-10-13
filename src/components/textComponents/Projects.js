import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import '../assets/styles.css';

const Projects = ({ openProjects, setOpenProjects }) => {
  return (
    <Card className='cardContainer' style={{backgroundColor: "black"}}>
      <h2><u>Projects</u></h2>
      <CardContent className='cardContent'>
        <Card className="projectContainer">
          <CardContent className="projectContent">
            <h3 className="projectHeader">Adventureon</h3>
            <a href="https://jackstunning.github.io/textAdventure/"><img className="projectImg" src="https://i.imgur.com/fmM8ShI.jpeg" alt="Adventureon" /></a>
            <br /><a href="https://github.com/JackStunning/textAdventure">(source code)</a>
            <div className="project">
              <div className="projectSkills">
                <h4 className="projectSubHeader">Technologies</h4>
                <Typography>HTML5 CSS3 jQuery</Typography>
              </div>
              <div className="projectAbout">
                <h4 className="projectSubHeader">About</h4>
                <Typography>Short text based adventure where you can create a character and choose different paths to get a different story.</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="projectContainer">
            <CardContent className="projectContent">
              <h3 className="projectHeader">World of Webscraping</h3>
              <img className="projectImg" src="https://i.imgur.com/xlXJVp3.png" alt="project called World of Webscraping"></img>
              <br /><a href="https://github.com/JackStunning/textAdventure">(source code)</a>
              <div className="project">
                <div className="projectSkills">
                  <h4 className="projectSubHeader">Technologies</h4>
                  <Typography>MongoDB Express React Node Puppeteer</Typography>
                </div>
                <div className="projectAbout">
                  <h4 className="projectSubHeader">About</h4>
                  <Typography>World of Warcraft Classic tool that helps users build their characters. Scrapes the WoW wiki and pushes the data to the database. The client recieves the data from the database and stores it until the user needs it.</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="projectContainer">
            <CardContent className="projectContent">
              <h3 className="projectHeader">Acolyte</h3>
              <img className="projectImg" src="https://i.imgur.com/DdnB6Aa.png" alt="code" />
              <br /><a href="https://github.com/n0remac/Pyweek">(source code)</a>
              <div className="project">
                <div className="projectSkills">
                  <h4 className="projectSubHeader">Technologies</h4>
                  <Typography>Python PyGame Python Arcade</Typography>
                </div>
                <div className="projectAbout">
                  <h4 className="projectSubHeader">About</h4>
                  <Typography>My first Python project, a video game my friends and I made for a game jam. I made the enemies, enemy spawning and pathing while my team worked on the rest of the game.</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
      </CardContent>
      <h3 className='cardClose' onClick={() => setOpenProjects(!openProjects)}>X</h3>
    </Card>
  )
}

export default Projects
