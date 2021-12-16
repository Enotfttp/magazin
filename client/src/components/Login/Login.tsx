import { action, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { postLogin } from "../../controllers/LoginController";
import LoginStyle from "./LoginStyle";

@observer
class Login extends React.Component {
	constructor(props: any) {
		super(props)
	}

	@observable login: string = "";
	@observable password: string = "";

	@action
	setLogin = (event: string) => {
		this.login = event;
	}
	@action
	setPassword = (event: string) => {
		this.password = event;
	}
	loginButton = (): void => {
		if (this.login && this.password) {

			postLogin(this.login, this.password, "USER").then((res) => {
				localStorage.setItem('token', res.token)
				console.log("good");
			}).catch((e) => {
				console.log('error = ', e);
			})
		}
	}

	render() {
		return (
			<>
				<LoginStyle>
					<h2>SIGN IN</h2>
					<label>Логин</label>
					<input onChange={(e: any) => this.setLogin(e.target.value)} type="text" />
					<label >Пароль</label>
					<input type="password" onChange={(e: any) => this.setPassword(e.target.value)} />
					<div>
						<button onClick={this.loginButton}>Войти</button>
						<Link to="/registr">Регитрация</Link>
					</div>
				</LoginStyle>

			</>
		)
	}
}
export default Login