import { observable } from "mobx";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Registr from "../Registration/Registr";
import ProtectedRouters from "./ProtectedRouters";

class Routers extends React.Component {

	render() {

		console.log();

		return (
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/registr" element={<Registr />} />
					<Route element={<ProtectedRouters />} >
						<Route path="/profile" element={<Profile />} />
						<Route path="/main" element={<Main />} />
					</Route >
				</Routes>
			</Router >
		)
	}
}
export default Routers