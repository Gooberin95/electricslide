import React from 'react';
import chimney from './chimney.jpg';
import trench from './abraham.jpg';
import lights from './houselights.jpg';
import styles from './my-style.module.css';
import aboutdata from './aboutdata.js';
import servicesdata from './servicesdata.js';
import estimatesdata from './estimatesdata.js';




function Section() {
	  return (
		      <>
		        <div className={styles.container} id="section1">
		          <div className={styles.row}>
		            <div className={styles['column-66']}>
		              <h1 className={styles['xlarge-font']}><b>About</b></h1>
		              <h1 className={styles['large-font']} style={{ color: "orange" }}><b>Why hire us?</b></h1>
		              <p><span style={{ fontSize: "36px" }}>Jobs done right the first time.</span></p><p>{aboutdata}</p>
		              <button className={styles.button}>Hire us now</button>
		            </div>
		            <div className={styles['column-33']}>
		              <img src={chimney} style={{ width: "535px", height: "471px", border: "solid grey", borderRadius: "4px" }} alt="App" />
		            </div>
		          </div>
		        </div>

		        <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
		          <div className={styles.row}>
		            <div className={styles['column-33']}>
		              <img src={lights} alt="App" width="535" height="471" style={{borderRadius: "4px", border: "solid #996633 "}}/>
		            </div>
		            <div className={styles['column-66']} id="section2">
		              <h1 className={styles['xlarge-font']}><b>Services</b></h1>
		              <h1 className={styles['large-font']} style={{ color: "#995c00" }}><b>List of Services</b></h1>
		              <p><span style={{ fontSize: "24px" }}>Detail Oriented.</span></p><p>{servicesdata}</p>
		              <button className={styles.button} style={{ backgroundColor: 'orange' }}>Hire us now</button>
		            </div>
		          </div>
		        </div>

		        <div className={styles.container} id="section3">
		          <div className={styles.row}>
		            <div className={styles['column-66']}>
		              <h1 className={styles['xlarge-font']}><b>Estimates</b></h1>
		              <h1 className={styles['large-font']} style={{ color: "orange" }}><b>Curious what estimates cost?</b></h1>
		              <p><span style={{ fontSize: "36px" }}>Estimates</span></p> <p> {estimatesdata}</p>
		              <button className={styles.button}>Hire us now</button>
		            </div>
		            <div className={styles['column-33']}>
		              <img src={trench} width="535" style={{ borderRadius: "4px",border: "solid grey"}} height="471" alt="App" />
		            </div>
		          </div>
		        </div>
		      </>
		    );
}

export default Section;

