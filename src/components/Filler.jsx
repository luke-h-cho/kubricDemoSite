import React from 'react';
import LogSVG from './LogSVG.jsx'
import GraphSVG from './GraphSVG.jsx'
const Filler = (props) => {
  return (
    <div id="fill-bg">
    <div id="filler">
      
    <span id="headline"><em>Monitor</em> your <em>Kubernetes</em> cluster</span>
    
      <div>
      <LogSVG/>
     <p>Kubric is a web application that queries remotely persisted application logs and displays important cluster metrics. </p> 
      <GraphSVG/>
      
      </div>
    </div>
    </div>
  )
}

export default Filler;