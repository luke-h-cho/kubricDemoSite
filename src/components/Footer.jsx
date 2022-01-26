import React, {useState} from 'react';
import bg from '../assets/y-so-serious-dark.png'
const Footer = (props) => {
  return (
    <div id="footer" style={{
      backgroundImage: `url(${bg})`
    }}>
      <div>Product Development Accelerated by <a href="https://opensourcelabs.io/">OS Labs</a></div>
      <div>Issues, concerns or comments? Feel free to reach out to us in our <a href="https://github.com/oslabs-beta/kubric">GitHub</a></div>
    </div>
  );
};

export default Footer;