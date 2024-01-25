import Section from './Section';
import Divider from './Divider';
import Gallery from './Gallery';
import React from 'react';
import points from './Keypoint.js'
import data from './LoremData';
import Topnav from './Topnav';
import Footer from './Footer';
import Jumbo from './Jumbo';

function App() {
  return (
	  <>
	  <Jumbo/>
	  <Topnav/>
	  <Section />
	  <Footer/>
	  
	  </>
  );
}

export default App;
