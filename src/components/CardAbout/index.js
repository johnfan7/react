import React from "react";
import "./style.css"
// import Pic from "../../linkedinprofileimg.jpeg"
import Pic from "../../latestpic.jpg"

function CardAbout() {
	return (
			<div>
				<img
					class="responsive"
					id="photo"
					src={Pic}
					alt="me"
				/>
				<p class="text">
					Hello, my name is John. <a href="https://www.linkedin.com/in/john-fan-3b5960159/" target="_blank" rel="noreferrer">LinkedIn profile</a>.
				</p>
			</div>
	);
}

export default CardAbout;