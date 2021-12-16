import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {

	const logout = () => {
		localStorage.removeItem("token")
	}

	return (
		<>
			<header>
				<Link to="/profile">Home</Link>
				<Link to="/main">Main</Link>
				<Link to="/" onClick={() => logout()}>Выход</Link>
			</header>
			<Outlet />
		</>
	)
}


export default Header