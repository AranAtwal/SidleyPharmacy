import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const handleMenuItemClick = () => {
		toggleMenu()
	}

	return (
		<nav>
			<div className="logo">LOGO</div>
			<div className="menu-toggle" onClick={toggleMenu}>
				☰
			</div>
			<ul className={`menu ${menuOpen ? "open" : ""}`}>
				<li onClick={handleMenuItemClick}>
					<Link to="/Home">Home</Link>
				</li>
				{/* <li onClick={handleMenuItemClick}>
					<a href="#">About</a>
				</li>
				<li onClick={handleMenuItemClick}>
					<a href="#">Services</a>
				</li> */}
				<li onClick={handleMenuItemClick}>
					<Link to="/Contact">Contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
