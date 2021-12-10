import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Registr from "../Registration/Registr";

class Routers extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="profile" element={<Profile />} />
					<Route path="main" element={<Main />} />
					<Route path="/registr" element={<Registr />} />
				</Routes>
			</Router >
		)
	}
}
export default Routers