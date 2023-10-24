import React, { useState } from "react"
import "./Navbar.css"

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<nav>
			<div className="logo">LOGO</div>
			<div className="menu-toggle" onClick={toggleMenu}>
				☰
			</div>
			<ul className={`menu ${menuOpen ? "open" : ""}`}>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
