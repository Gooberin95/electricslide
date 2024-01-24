import React from 'react';
import sparks from './media/visionarytwo.jpg';
import photo from './media/visionary.jpg';
import styles from './my-style.module.css';

function Section() {
	  return (
		      <>
		        <div className={styles.container}>
		          <div className={styles.row}>
		            <div className={styles['column-66']}>
		              <h1 className={styles['xlarge-font']}><b>About</b></h1>
		              <h1 className={styles['large-font']} style={{ color: "orange" }}><b>Why hire us?</b></h1>
		              <p><span style={{ fontSize: "36px" }}>Jobs done right the first time.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		              <button className={styles.button}>Download Application</button>
		            </div>
		            <div className={styles['column-33']}>
		              <img src={photo} style={{ width: "335px", height: "471px" }} alt="App" />
		            </div>
		          </div>
		        </div>

		        <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
		          <div className={styles.row}>
		            <div className={styles['column-33']}>
		              <img src={sparks} alt="App" width="335" height="471" />
		            </div>
		            <div className={styles['column-66']}>
		              <h1 className={styles['xlarge-font']}><b>Clarity</b></h1>
		              <h1 className={styles['large-font']} style={{ color: "red" }}><b>Pixels, who?</b></h1>
		              <p><span style={{ fontSize: "24px" }}>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		              <button className={styles.button} style={{ backgroundColor: 'red' }}>Read More</button>
		            </div>
		          </div>
		        </div>

		        <div className={styles.container}>
		          <div className={styles.row}>
		            <div className={styles['column-66']}>
		              <h1 className={styles['xlarge-font']}><b>The App</b></h1>
		              <h1 className={styles['large-font']} style={{ color: "MediumSeaGreen" }}><b>Why buy it?</b></h1>
		              <p><span style={{ fontSize: "36px" }}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		              <button className={styles.button}>Download Application</button>
		            </div>
		            <div className={styles['column-33']}>
		              <img src={photo} width="335" height="471" alt="App" />
		            </div>
		          </div>
		        </div>
		      </>
		    );
}

export default Section;

