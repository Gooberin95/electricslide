import React from 'react';
import photo from './currentlogo.png';

function Section({ title, subtitle, dark, id, color }) {
	  const sectionStyle = {
		      display: 'flex',
		      flexDirection: 'column', // Set flex direction to column for mobile responsiveness
		      backgroundColor: color || (dark ? '#333' : '#fff'),
		      border: 'solid',
		      marginTop: '50px', // Adjust margin for mobile
		      marginBottom: '50px', // Adjust margin for mobile
		      borderRadius: '10px',
		      padding: '20px', // Adjust padding for mobile
		    };

	  const leftimg = {
		      textAlign: 'center', // Center the image on mobile
		      marginBottom: '20px', // Adjust margin for mobile
		    };

	  const rightColumnStyle = {
		      padding: '20px',
		    };

	  const subtitleStyle = {
		      fontSize: '100%',
		    };

	  return (
		      <div className={`section${dark ? ' section-dark' : ''}`} style={sectionStyle}>
		        <div className="section-content" id={id}>
		          <div style={leftimg}>
		            <img src={photo} alt="photo" style={{ maxWidth: '100%', height: 'auto' }} />
		          </div>
		          <div style={rightColumnStyle}>
		            <h1>{title}</h1>
		            <p style={subtitleStyle}>{subtitle}</p>
		          </div>
		        </div>
		      </div>
		    );
}

export default Section;

