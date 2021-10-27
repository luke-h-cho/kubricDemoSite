import React, { Component} from 'react';
import { render } from 'react-dom';
import Header from './components/Header.jsx';
import Filler from './components/Filler.jsx';
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
      <div id="toNavbar"><a href="#navbar"><svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" width="24" height="24"  viewBox="0 0 24 24"><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg></a></div>
      <Filler/>
      <Demo/>
      <People/>
      <Footer/>
    </div>
  )
}
}

render(<App />, document.querySelector('#root'));