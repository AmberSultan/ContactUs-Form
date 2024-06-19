import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/ContactText/Contact';
import Form from './components/Form/Form';
import Social from './components/Socials/Social';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Contact />
      <div className="both">
      <Form />
      <Social />
      </div>
    </div>
  );
}

export default App;
