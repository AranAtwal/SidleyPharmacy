import React from "react"
import "./Contact.css"

import pharmacist from "../../assets/images/pharmacist2.png"

function Contact() {
	return (
		<div className="Contact">
			<section className="header container">
				<div className="header-image-container">
					<img
						className="header-image"
						src={pharmacist}
						alt="pharamcist"
					/>
				</div>
				<h1 className="title">Contact</h1>
				<h4>
					Connecting with us is easy. We're ready to assist with your
					healthcare needs.
				</h4>
			</section>
			<section className="opening-hours container">
				<h2 className="opening-hours-title title">Opening Hours</h2>
				<ul className="opening-hours-list">
					<li className="opening-hours-list-item">
						<p>Monday</p>
						<p>9:00 - 17:30</p>
					</li>
					<hr />
					<li className="opening-hours-list-item">
						<p>Tuesday</p>
						<p>9:00 - 17:30</p>
					</li>
					<hr />
					<li className="opening-hours-list-item">
						<p>Wednesday</p>
						<p>9:00 - 17:30</p>
					</li>
					<hr />
					<li className="opening-hours-list-item">
						<p>Thursday</p>
						<p>9:00 - 17:30</p>
					</li>
					<hr />
					<li className="opening-hours-list-item">
						<p>Friday</p>
						<p>9:00 - 17:30</p>
					</li>
					<hr />
					<li className="opening-hours-list-item">
						<p>Saturday</p>
						<p>9:00 - 13:00</p>
					</li>
					<hr />
					<li className="opening-hours-list-item">
						<p>Sunday</p>
						<p>Closed</p>
					</li>
					<hr />
				</ul>
			</section>
		</div>
	)
}

export default Contact
