import React from 'react';


function Section({ title, subtitle, dark, id, color }) {
	    const sectionStyle = {
		            backgroundColor: color || (dark ? "#333" : "#fff"),
		            border: "solid",
		            marginTop: "25px",
		            borderRadius: "10px",
		            textAlign: "center", // Align text to the right
		        };

	    const subtitleStyle = {
		            fontSize: "130%",
		        };

	    return (
		            <div className={"section" + (dark ? " section-dark" : "")} style={sectionStyle}>
		                <div className="section-content" id={id}>
		                    <h1>{title}</h1>

		                    <p style={subtitleStyle}>
		                        {subtitle}
		                        <br />
		                        {subtitle}
		                    </p>
		                </div>
		            </div>
		        );
}

export default Section;

