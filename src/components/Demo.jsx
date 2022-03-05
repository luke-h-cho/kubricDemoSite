import React, {useState} from 'react';
import kubricLogDemoTest from '../assets/KubricLogDemoTest.gif'
import kubricDemoNodeToggle from '../assets/KubricDemoNodeToggle.gif'
import kubricTabToggleDemo from '../assets/KubricTabToggleDemo.gif'
import bg from '../assets/y-so-serious-white.png'
import darkbg from '../assets/y-so-serious-dark.png'
import Carousel from 'react-bootstrap/Carousel'

const Demo = (props) => {
  const styleOverride = {
    firstSlide:{
      color:'black'
    },
    otherSlides:{
      fontSize:'1.5vw',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontWeight:'bold'
    }

   
  }
  return (
    <div id="demo" style={{backgroundImage: `url(${bg})`}} >
      <div id="carouselHolder">
      <Carousel>
  <Carousel.Item >
  <img className="imgStyle" src={kubricLogDemoTest}
  />
    <Carousel.Caption 
>
      <h3 style={{...styleOverride.otherSlides,...styleOverride.firstSlide,}}>Query Persistent Log Storage by Index Name, Field and Value.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
  <img className="imgStyle" src={kubricDemoNodeToggle}/>
    <Carousel.Caption>
      <h3 style={styleOverride.otherSlides}>Toggle Visualization to view relative performance.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
  <img className="imgStyle" src={kubricTabToggleDemo}/>

    <Carousel.Caption>
      <h3 style={styleOverride.otherSlides}>Tab between Overview, Master and Worker Node views.</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> 
    </div>
  );
};

export default Demo;