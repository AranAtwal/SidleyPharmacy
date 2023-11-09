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
			<section className="location container">
				<iframe
					className="location-map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.5818633328!2d0.46365654481087526!3d50.85742686072971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df11e3de3f6cd5%3A0x375a3b308105d633!2sSidley%20Pharmacy!5e0!3m2!1sen!2suk!4v1699553195817!5m2!1sen!2suk"
					allowfullscreen="true"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</section>
		</div>
	)
}

export default Contact
