import React, {useState} from 'react';
import Header from './components/Header.jsx';
import Demo from './components/Demo.jsx';
import People from './components/People.jsx';
import Footer from './components/Footer.jsx';
import './components/app.scss';
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/js/brands.js'

const App = () => {

  return (
    <div id="app">
      <Header/>
      <Demo/>
      <People/>
      <Footer/>
    </div>
  );
};


export default App;