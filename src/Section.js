import React from 'react';
import photo from './currentlogo.png'

function Section({ title, subtitle, dark, id, color}) {
	  const sectionStyle = {
		      display: 'flex',
		      
		      backgroundColor: color || (dark ? '#333' : '#fff'),
		      border: 'solid',
		      marginTop: '100px',
		      marginBottom: '250px',
		      borderRadius: '10px',
		    };

	  const leftimg = {
		      float: 'left',
		      padding: '20px', // Adjust the padding as needed
		    };

	  const rightColumnStyle = {
		      flex: '0',
		      padding: '20px', // Adjust the padding as needed
		    };

	  const subtitleStyle = {
		      fontSize: '100%',
		    };

	  return (
		      <div className={`section${dark ? ' section-dark' : ''}`} style={sectionStyle}>
		        <div className="section-content" id={id}>
		          <div style={leftimg}>
		  		<img  src={photo} alt="photo"/>
		          </div>
		          <div style={rightColumnStyle}>
		            <h1>{title}</h1>
		            <p style={subtitleStyle}>
		              {subtitle}
		            </p>
		          </div>
		        </div>
		      </div>
		    );
}

export default Section;

