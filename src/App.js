import Section from './Section';
import Divider from './Divider';
import React from 'react';
import data from './LoremData';
import Topnav from './Topnav';
import './App.css';
import Footer from './Footer';


function App() {
  return (
	  <>
	  <Topnav/>
	  <Section color="#FDC168" id="section1" title="section1" subtitle={data}/>
	  <Section color="#FFF1DC" id="section2" title="section2" subtitle={data}/>
	  <Section color="#FDC168" id="section3" title="section3" subtitle={data}/>
	  <Section color="#FFF1DC" id="section4" title="section4" subtitle={data}/>
	  <Footer/>
	  
	  </>
  );
}

export default App;
