import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

import Hamburger from "hamburger-react"

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
			<Hamburger toggled={menuOpen} toggle={setMenuOpen} size={20} />
			<ul className={`menu ${menuOpen ? "open" : ""}`}>
				<li onClick={handleMenuItemClick}>
					<Link to="/">Home</Link>
				</li>
				<li onClick={handleMenuItemClick}>
					<Link to="/Services">Services</Link>
				</li>
				<li onClick={handleMenuItemClick}>
					<Link to="/Contact">Contact</Link>
				</li>
			</ul>
			<div
				className={`menu-backdrop ${menuOpen ? "open" : ""}`}
				onClick={toggleMenu}
			></div>
		</nav>
	)
}

export default Navbar
