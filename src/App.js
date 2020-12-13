import React, { useState } from 'react';
import './App.css';
import Page from './components/Page';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume'

function App() {
  // define primary navigation options, this is an Array of Objects
  const [navOptions] = useState([
    {
      id: 'about',
      text: 'About Me',
      description: 'This is the ABOUT page...have a nice day',
      component: <About></About>
    },
    {
      id: 'portfolio',
      text: 'Portfolio',
      description: 'This is the PORTFOLIO page...',
      component:<Portfolio></Portfolio>
    },
    {
      id: 'contact',
      text: 'Contact',
      description: 'this is the CONTACT page...hello is this working??',
      component:<Contact></Contact>
    },
    {
      id: 'resume',
      text: 'Resume',
      description: 'this is the RESUME page...under construction...',
      component: <Resume></Resume>
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
      <Footer></Footer>
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
