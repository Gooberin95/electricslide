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
	  <Section color="#FDC168" id="section1" title="About" subtitle={data}/>
	  <Section color="#FFF1DC" id="section2" title="Services" subtitle={data}/>
	  <Section color="#FDC168" id="section3" title="Estimates" subtitle={data}/>
	  <Section color="#FFF1DC" id="section4" title="Gallery" subtitle={data}/>
	  <div style={{height: "45px"}}>
	  </div>
	  <Footer/>
	  
	  </>
  );
}

export default App;
