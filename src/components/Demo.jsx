import React, {useState} from 'react';
import kubricLogDemoTest from '../assets/KubricLogDemoTest.gif'
import kubricDemoNodeToggle from '../assets/KubricDemoNodeToggle.gif'
import kubricTabToggleDemo from '../assets/KubricTabToggleDemo.gif'
import bg from '../assets/y-so-serious-white.png'
const Demo = (props) => {
  return (
    <div id="demo" style={{
      backgroundImage: `linear-gradient(to top left,rgba(50, 116, 109,.6),rgba(206, 224, 220,.1)),url(${bg})`
    }}>
     <div className="logDemo">
       <img className="imgStyle" src={kubricLogDemoTest}/>
       <p className="demoText">Query Persistent Log Storage by Index Name, Field and Value</p>
        </div>
      <br/>
      <div className="toggleDemo">
      <p className="demoText">Toggle Visualization to view relative performance</p>
      <img className="imgStyle" src={kubricDemoNodeToggle}/>
      </div>
      <br/>
      <div className="tabDemo">
      <img className="imgStyle" src={kubricTabToggleDemo}/>
      <p className="demoText">Tab between Overview, Master and Worker Node views</p>
      </div>
      <br/>
    </div>
  );
};

export default Demo;