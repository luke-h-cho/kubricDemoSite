import React, { Component} from 'react';
import { render } from 'react-dom';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
render(){
  return (
    <div>
      <Header/>
    </div>
  )
}
}


render(<App />, document.querySelector('#root'));