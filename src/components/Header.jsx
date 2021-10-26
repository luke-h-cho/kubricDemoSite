import React, {useState} from 'react';

const Header = (props) => {

  return (
    <div id="navbar">
      <div id="right-navbar" >
        <a href="#"><img src='/'/>Home</a>
        <a href="https://github.com/oslabs-beta/kubric"><img src='/'/>Github</a>
        <a href="#"><img src='/'/>Medium Article</a>    
      </div>
      <div id="left-navbar" >
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