import React, { useState } from "react"
import { Link } from "react-router-dom"
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
					<Link to="/">Home</Link>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<Link to="/Contact">Contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
