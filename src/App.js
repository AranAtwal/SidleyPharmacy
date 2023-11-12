import React from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home.js"
import Contact from "./pages/Contact/Contact.js"
import Services from "./pages/Services/Services.js"
import Footer from "./components/Footer/Footer.js"

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Services" element={<Services />} />
						<Route path="/Contact" element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	)
}

export default App
