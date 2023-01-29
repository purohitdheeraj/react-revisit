import React from "react";
import reactLogo from "../assets/react.svg";

const Header = () => {
	return (
		<nav className="nav">
			<img src={reactLogo} className="nav-logo" />
			<h2 className="logo-text">React Facts</h2>
			<h3 className="nav-title">
				React Course - Project 1
			</h3>
		</nav>
	);
};

export default Header;
