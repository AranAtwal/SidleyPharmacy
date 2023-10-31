import React from "react"
import "./Home.css"

import pharmacist from "../../assets/images/pharmacist.jpeg"

function Home() {
	return (
		<div className="Home">
			<main className="main-content">
				<section className="hero">
					<div className="hero-image-container">
						<img
							className="hero-image"
							src={pharmacist}
							alt="pharamcy staff"
						/>
					</div>
					<div className="hero-services">
						<h1 className="hero-services-title">
							NHS and Private Pharmacy Services
						</h1>
						<ul className="hero-serices-list">
							<li>Order your NHS Perscriptions</li>
							<li>
								Avoid waiting for your GP, book NHS and private
								appointments via the app today.
							</li>
							<li>Get your NHS prescriptions delivered.</li>
							<li>Manage your loved ones Health care needs</li>
						</ul>
						<div className="nhs-login">
							<a
								href="https://www.nhs.uk/nhs-app/account/"
								className="nhs-login-button"
							>
								<span className="nhs-login-logo">NHS</span>
								<span className="nhs-login-text">
									Continue with NHS Login
								</span>
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home
