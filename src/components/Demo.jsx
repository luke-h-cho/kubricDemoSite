import React, {useState} from 'react';
import kubricLogDemoTest from '../assets/KubricLogDemoTest.gif'
import kubricDemoNodeToggle from '../assets/KubricDemoNodeToggle.gif'
import kubricTabToggleDemo from '../assets/KubricTabToggleDemo.gif'
const Demo = (props) => {
  return (
    <div id="demo">
     <div className="logDemo">
       <img className="imgStyle" width='360' height='240' src={kubricLogDemoTest}/>
       <p className="demoText">Query Persistent Log Storage by Index Name, Field and Value</p>
        </div>
      <br/>
      <div className="toggleDemo">
      <p className="demoText">Toggle Visualization to view relative performance</p>
      <img className="imgStyle" width='360' height='240' src={kubricDemoNodeToggle}/>
      </div>
      <br/>
      <div className="tabDemo">
      <img className="imgStyle" width='360' height='240' src={kubricTabToggleDemo}/>
      <p className="demoText">Tab between Overview, Master and Worker Node views</p>
      </div>
      <br/>
    </div>
  );
};

export default Demo;