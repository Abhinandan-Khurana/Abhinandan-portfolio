import React from 'react'
import './Style.css'
const Navbar = () => {
	return (

		<div className="navbar">
			<div className="boi">
				<div className="logo"><span className="portfo">Portfo</span><span className="lio">lio.</span></div>
				<ul className="menu">
					<li> <a href="#Home" className="nav-barB">Home</a></li>
					<li><a href="#About" className="nav-barB">About</a></li>
					<li><a href="#Interests" className="nav-barB">Interests</a></li>
					<li><a href="#Skills" className="nav-barB">Skills</a></li>
					<li><a href="#Projects" className="nav-barB">Projects</a></li>
					<li><a href="#Contact" className="nav-barB">Contact</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
