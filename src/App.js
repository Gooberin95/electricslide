import Section from './Section';
import Divider from './Divider';
import Gallery from './Gallery';
import React from 'react';
import points from './Keypoint.js'
import data from './LoremData';
import Topnav from './Topnav';
import Footer from './Footer';


function App() {
  return (
	  <>
	  <Topnav/>
	  <div style={{height: "70px"}}></div>
	  <Gallery/>
	  <Section color="#FDC168" id="section1" title="About" subtitle={data}/>
	  <Section color="#FFF1DC" id="section2" title="Services" subtitle={data}/>
	  <Section color="#FDC168" id="section3" title="Estimates" subtitle={points} />
	  <div style={{height: "85px"}}></div>
	  <Footer/>
	  
	  </>
  );
}

export default App;
