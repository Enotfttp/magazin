import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
	return (
		<>
			<header>
				<Link to="profile">Home</Link>
				<Link to="/">Login</Link>
				<Link to="main">Main</Link>
			</header>
			<Outlet />
		</>
	)
}


export default Header