import Section from './Section';
import Divider from './Divider';
import Gallery from './Gallery';
import React from 'react';
import points from './Keypoint.js'
import data from './LoremData';
import Topnav from './Topnav';
import Footer from './Footer';
import Jumbo from './Jumbo';
import Topinfo from './Topinfo';
import Topjumbo from './Topjumbo';
import GalleryHeader from './GalleryHeader';

function App() {
  return (
	  <>
	  <Topnav/>
	  <Jumbo/>
	  <Section />
	  <Gallery/>
	  <Footer/>
	  
	  </>
  );
}

export default App;
