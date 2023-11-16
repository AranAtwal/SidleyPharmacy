import React from "react"
import "./Services.css"

function Services() {
	return (
		<div className="Services">
			<section className="header container">
				<h1 className="title">Services</h1>
			</section>
			<section className="services container">
				<div className="services-group nhs">
					<h2 className="services-group-title title">NHS Services</h2>
					<ul className="services-group-list">
						<li className="services-group-list-item">
							Travel Clinic
						</li>
						<hr />
						<li className="services-group-list-item">
							Blood Testing
						</li>
						<hr />
						<li className="services-group-list-item">
							Ear Wax Removal
						</li>
						<hr />
						<li className="services-group-list-item">
							Cryotherapy
						</li>
						<hr />
						<li className="services-group-list-item">
							Covid vaccination
						</li>
						<hr />
					</ul>
				</div>
				<div className="services-group private">
					<h2 className="services-group-title title">
						Private Services
					</h2>
					<ul className="services-group-list">
						<li className="services-group-list-item">
							Travel Clinic
						</li>
						<hr />
						<li className="services-group-list-item">
							Blood Testing
						</li>
						<hr />
						<li className="services-group-list-item">
							Ear Wax Removal
						</li>
						<hr />
						<li className="services-group-list-item">
							Cryotherapy
						</li>
						<hr />
					</ul>
				</div>
			</section>
		</div>
	)
}

export default Services
