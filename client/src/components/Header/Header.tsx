import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

function Header() {

	const logout = () => {
		localStorage.removeItem("token")
	}

	return (
		<>
			<HeaderStyled>
				<header>
					<NavLink to="/profile" >Home</NavLink>
					<NavLink to="/main">Main</NavLink>
					<NavLink to="/" onClick={() => logout()} className="logout">Выход</NavLink>
				</header>
				<Outlet />
			</HeaderStyled>
		</>
	)
}


export default Header