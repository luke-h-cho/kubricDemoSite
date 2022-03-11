import React from 'react';
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
    </div>
  )
}

export default Filler;