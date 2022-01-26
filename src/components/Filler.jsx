import React, {useState} from 'react';
import kubric from '../assets/kubric-colored-skeleton.png'
import bg from '../assets/y-so-serious-dark.png'

const Filler = (props) => {
  return (
    <div id="filler" style={{
      backgroundImage: `linear-gradient(to top left,rgba(50, 116, 109,.8),rgba(206, 224, 220,.1)),url(${bg})`
    }}>
      <p>What is Kubric?<br/><br/>
      Kubric is a web application that displays key cluster metrics 
      of Kubernetes Node and Pod processes as well as remotely persisted 
      application logs to query.
      </p>
      
    </div>
  )
}

export default Filler;