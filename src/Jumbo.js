import React from 'react';
import Button from 'react-bootstrap/Button';
import photo from './Original.png';
import style from './jumbo-style.module.css';

function Jumbo() {
	return (
		<>
		<div className={style["hero-image"]}>
		  <div className={style["hero-text"]}>
		    <h1>Visionary General Contractor LLC</h1>

		  </div>
		</div>
		</>
	);
}
export default Jumbo;