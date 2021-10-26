import React, {useState} from 'react';
// import './app.scss';

const Header = (props) => {

  return (
    <div id="navbar" style={{display: 'flex', aligntItems: 'center', justifyContent: "space-between", width: '100%', height: '300px', backgroundColor: "black", color: 'white'}}>
      <div id="right-navbar" style={{display: 'flex'}}>
        <div>
          <a href="#"><img src='/'/>Home</a>
        </div>
        <div>
          <a href="https://github.com/oslabs-beta/kubric"><img src='/'/>Github</a>
        </div>
        <div>
          <a href="#"><img src='/'/>Medium Article</a>
        </div>      
      </div>
      <div id="left-navbar" style={{display: 'flex'}}>
        <div> 
          <a href="#demo">Demo</a>
        </div>
        <div> 
          <a href="#people">Team</a>
        </div>
        <div> 
          <a href="#footer">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header;