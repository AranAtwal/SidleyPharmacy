import React from "react"
import "./Home.css"

import pharmacist from "../../assets/images/pharmacist.jpeg"

function Home() {
	return (
		<div className="Home">
			<main className="main-content">
				<section className="hero">
					<div className="hero-image-container container">
						<img
							className="hero-image"
							src={pharmacist}
							alt="pharamcy staff"
						/>
					</div>
					<div className="hero-services container">
						<h1 className="hero-services-title">
							NHS and Private Pharmacy Services
						</h1>
						<ul className="hero-services-list">
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
								target="_blank"
							>
								<span className="nhs-login-logo">NHS</span>
								<span className="nhs-login-text">
									Continue with NHS Login
								</span>
							</a>
						</div>
						<div className="nhs-apps">
							<a
								href="https://play.google.com/store/apps/details?id=com.nhs.online.nhsonline&hl=en"
								className="nhs-android"
								target="_blank"
							>
								<span className="nhs-android-logo">Logo</span>
								<span className="nhs-app-text">
									Google Play
								</span>
							</a>
							<a
								href="https://apps.apple.com/gb/app/nhs-app/id1388411277"
								className="nhs-apple"
								target="_blank"
							>
								<span className="nhs-apple-logo">Logo</span>
								<span className="nhs-app-text">App Store</span>
							</a>
						</div>
					</div>
				</section>
				<section className="services">
					<div className="container">
						<h1>lorem ipsum</h1>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home
