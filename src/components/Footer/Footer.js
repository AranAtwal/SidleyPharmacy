import React from "react"
import "./Footer.css"

function Footer() {
	return (
		<footer className="footer container">
			<div className="footer-information footer-section">
				<h2 className="footer-section-title title">Information</h2>
				<ul className="footer-section-list">
					<li className="footer-section-list-item">
						<p>Companies House Registration Number</p>
						<p>XXXXXX</p>
					</li>
					<li className="footer-section-list-item">
						<p>Premises GPhC Number</p>
						<p>XXXXXX</p>
					</li>
					<li className="footer-section-list-item">
						<p>Superintendent Pharmacist</p>
						<p>Sukhpal Uppal (XXXXX)</p>
					</li>
				</ul>
			</div>
			<div className="footer-contact footer-section">
				<h2 className="footer-section-title title">Contact</h2>
				<ul className="footer-section-list">
					<li className="footer-section-list-item">
						<p>44 Turkey Rd, Sidley, Bexhill-on-Sea TN39 5HE</p>
					</li>
					<li className="footer-section-list-item">
						<p>Mon-Fri 8am - 8pm, Sat-Sun 9am - 5pm</p>
					</li>
					<li className="footer-section-list-item">
						<p>01424 220424</p>
					</li>
					<li className="footer-section-list-item">
						<p>email@example.com</p>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
