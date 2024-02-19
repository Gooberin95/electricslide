import Section from './Section';
import Gallery from './Gallery';
import React from 'react';
import Topnav from './Topnav'
import Footer from './Footer';
import Jumbo from './Jumbo';
import GalleryHeader from './GalleryHeader';

function App() {
  return (
	  <>
	  <Topnav/>
	  <Jumbo/>
	  <Section />
	  <GalleryHeader/>
	  <Gallery/>
	  <Footer/>
	  
	  </>
  );
}

export default App;
