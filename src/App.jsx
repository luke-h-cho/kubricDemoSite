import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Demo from './components/Demo.jsx';
import People from './components/People.jsx';
import Footer from './components/Footer.jsx';
import './components/app.scss';

const App = () => {

  return (
    <div>
      <Header/>
      <Demo/>
      <People/>
      <Footer/>
    </div>
  );
};


export default App;