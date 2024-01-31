import React from 'react';
import style from './jumbo-style.module.css';
import lawncare from './homeproject.mp4';

function Jumbo() {
		  return (
			  		      <>
			  		        <div className={style["hero-container"]}>
			  		          <video autoPlay muted loop className={style["video-background"]}>
			  		            <source src={lawncare} type="video/mp4" />
			  		          </video>
			  		          <div className={style["hero-text"]}>
			  		            Visionary General Contractor LLC
			  		          </div>
			  		        </div>
			  		      </>
			  		    );
}

export default Jumbo;
