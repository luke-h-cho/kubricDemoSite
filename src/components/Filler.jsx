import React, {Text,useState} from 'react';
import kubric from '../assets/kubric-colored-skeleton.png'
import bg from '../assets/y-so-serious-dark.png'
import lightbg from '../assets/y-so-serious-white.png'
import LogSVG from './LogSVG.jsx'
import GraphSVG from './GraphSVG.jsx'
const Filler = (props) => {
  return (
    <div id="filler">
      
    <span id="headline"><em>Monitor</em> your <em>Kubernetes</em> cluster</span>
    
      <div style={{'border-bottom':'4px solid rgb(34, 40, 38)'}}>
      <LogSVG/>
     <p>Kubric is a web application that queries remotely persisted application logs and displays important cluster metrics. </p> 
      <GraphSVG/>
      
      </div>
      <span style={{
      backgroundImage: `url(${bg})`
    }}></span>
    </div>
  )
}

export default Filler;