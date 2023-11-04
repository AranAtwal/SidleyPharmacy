import React from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home.js"
import Contact from "./pages/Contact/Contact.js"

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/Home" element={<Home />} />
						<Route path="/Contact" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
