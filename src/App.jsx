import React, { Component} from 'react';
import { render } from 'react-dom';
import Header from './components/Header.jsx';
import Demo from './components/Demo.jsx';
import People from './components/People.jsx';
import Footer from './components/Footer.jsx';
import './components/app.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
render(){
  return (
    <div id="app">
      <Header/>
      <Demo/>
      <People/>
      <Footer/>
    </div>
  )
}
}

render(<App />, document.querySelector('#root'));