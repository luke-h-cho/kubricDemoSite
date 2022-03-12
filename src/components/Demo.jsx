import React, {useState} from 'react';
import kubricLogDemoTest from '../assets/KubricLogDemoTest.gif'
import kubricDemoNodeToggle from '../assets/KubricDemoNodeToggle.gif'
import kubricTabToggleDemo from '../assets/KubricTabToggleDemo.gif'
import Carousel from 'react-bootstrap/Carousel'

const Demo = () => {
  

  return (
    <div id="demo-bg">
    <div id="demo">
      <div id="carouselHolder">
      <Carousel>
  <Carousel.Item >
  <img className="imgStyle" src={kubricLogDemoTest}
  />
    <Carousel.Caption 
>
      <h3 id="carousel-text">Query Log Storage by Index Name, Field and Value.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
  <img className="imgStyle" src={kubricDemoNodeToggle}/>
    <Carousel.Caption>
      <h3 id="carousel-text">Toggle Visualization to view relative performance.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
  <img className="imgStyle" src={kubricTabToggleDemo}/>

    <Carousel.Caption>
      <h3 id="carousel-text">Tab between Overview, Master and Worker Node views.</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> 
    </div>
    </div>
  );
};

export default Demo;