import React, { useState } from 'react';
import './App.css';
import Page from './components/Page';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  // define primary navigation options, this is an Array of Objects
  const [navOptions] = useState([
    {
      key: 'about',
      text: 'About me',
      description: 'some random text',
      component: <About></About>
    },
    {
      key: 'portfolio',
      text: 'Portfolio',
      description: 'some random text'
    },
    {
      key: 'contact',
      text: 'Contact',
      description: 'some random text'
    },
    {
      key: 'resume',
      text: 'Resume',
      description: 'some random text'
    }
  ]);

  //  define current navOption selected on the page
  const [currentOption, setCurrentOption] = useState(navOptions[0]);

  return (
    <div>
      <Nav
        navOptions = {navOptions}
        currentOption = {currentOption}
        setCurrentOption = {setCurrentOption}      
      ></Nav>
      <main>
        <Page
          currentOption = {currentOption}
        ></Page>
      </main>
      <footer>
        This is the footer
      </footer>
    </div>
  );
}

export default App;

// Notes to myself:
// This App.js file is the center of the application.
// Think of App.js as the root component, or the wrapper component that
// houses all of the other components. To effect any change on the application,
// we need to either modify this file or add components inside it.

// You need to import React in every component file.
