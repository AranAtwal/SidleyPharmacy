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
				</section>
			</main>
		</div>
	)
}

export default Home
