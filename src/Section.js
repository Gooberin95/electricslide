import React from 'react';

function Section({title, subtitle, dark, id, color}) {
	const sectionStyle = {
		backgroundColor: color || (dark ? "#333" : "#fff"),
		border: "solid",
		marginTop: "25px",
		borderRadius: "10px"
	};
	return (
		
		<div className={"section" + (dark ? " section-dark" : "")} style={sectionStyle}>
		 <div className="section-content" id={id}>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		 </div>
		</div>

	);
}
export default Section;
