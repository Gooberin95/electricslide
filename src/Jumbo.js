import React from 'react';
import style from './jumbo-style.module.css';

function Jumbo() {
	return (
		<>
		<div className={style["hero-image"]} style={{borderBottom: "solid grey"}}>
		  <div className={style["hero-text"]}>
		    <h1>Visionary General Contractor LLC</h1>

		  </div>
		</div>
		</>
	);
}
export default Jumbo;
