import React from "react"
import "./Home.css"

import pharmacyStaff from "../../assets/images/pharmacy-staff.jpg"

function Home() {
	return (
		<div className="Home">
			<main className="main-content">
				<section className="hero">
					<img src={pharmacyStaff} alt="pharamcy staff" />
				</section>
			</main>
		</div>
	)
}

export default Home
