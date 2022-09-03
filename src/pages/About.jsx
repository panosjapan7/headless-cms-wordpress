import React from 'react'
import "../styles/About.css"

function About() {
  return (
    <div className='about-wrapper'>
        <h1>Webbutveckling med CMS Uppgift</h1>
        
        <div className="team-stack-container">
            <div className="team-container">
                <h2>Team</h2>
                <p className='team-items'>Anna</p>
                <p className='team-items'>Jesper</p>
                <p className='team-items'>Miran</p>
                <p className='team-items'>Panos</p>
            </div>
            <div className="stack-container">
                <h2>Stack</h2>
                <p className='stack-items'>Wordpress</p>
                <p className='stack-items'>React</p>
                <p className='stack-items'>GitHub</p>
                <p className='stack-items'>html-react-parser</p>
            </div>
        </div>

    </div>
  )
}

export default About