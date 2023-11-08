import React from "react"
import "./Home.css"

import pharmacist from "../../assets/images/pharmacist.png"
import pharmacyStaff from "../../assets/images/pharmacy-staff.png"

function Home() {
	return (
		<div className="Home">
			<main className="main-content">
				<section className="hero container">
					<div className="hero-image-container">
						<img
							className="hero-image"
							src={pharmacist}
							alt="pharamcist"
						/>
					</div>
					<div className="hero-services">
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
						<h1 className="title">Services</h1>
						<div className="services-list">
							<div className="services-list-item">
								<div className="services-list-item-title">
									Travel Clinic
								</div>
								<div className="services-list-item-description">
									At Your Local Pharmacy, we provide a full
									range of travel clinic services including
									travel vaccinations and malaria tablets.
								</div>
							</div>
							<div className="services-list-item">
								<div className="services-list-item-title">
									Blood Testing
								</div>
								<div className="services-list-item-description">
									Blood tests have a wide range of uses and
									are one of the most common types of medical
									test.
								</div>
							</div>
							<div className="services-list-item">
								<div className="services-list-item-title">
									Ear Wax Removal
								</div>
								<div className="services-list-item-description">
									Ear wax is healthy in normal amounts and
									serves as a self-cleansing agent with
									protective, lubricating and antibacterial
									properties
								</div>
							</div>
							<div className="services-list-item">
								<div className="services-list-item-title">
									Cryotherapy
								</div>
								<div className="services-list-item-description">
									Cryotherapy is a method of freezing which
									uses a substance called liquid nitrogen. A
									carefully controlled amount of liquid
									nitrogen is applied to the affected area of
									skin.
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="bio">
					<div className="container">
						<h1 className="title">Sidley Pharmacy</h1>
						<div className="bio-info">
							<div className="staff-image-container">
								<img
									className="staff-image"
									src={pharmacyStaff}
									alt="pharamcy staff"
								/>
							</div>
							<div className="bio-info-container">
								<h2 className="bio-info-title">
									We are a family run independent pharmacy
									serving the local communities.
								</h2>
								<p className="bio-info-description">
									We founded the company with the aim to serve
									the local community and provide a wide range
									of healthcare services to our community of
									Erdington, Gravelly Hill, Washwood Heath,
									Sutton Coldfield, Aston and the surrounding
									areas.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home
