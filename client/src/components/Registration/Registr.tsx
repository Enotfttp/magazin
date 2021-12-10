import { action, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { postRegistr } from "../../controllers/LoginController";
import RegistrStyle from "./RegistrStyle";

@observer
class Registr extends React.Component {
	@observable login: string = "";
	@observable password: string = "";
	@observable repeatPassword: string = "";


	@action
	setLogin = (event: string) => {
		this.login = event;
	}
	@action
	setPassword = (event: string) => {
		this.password = event;
	}
	@action
	setReapeatPassword = (event: string) => {
		this.repeatPassword = event;
	}
	loginButton = (): void => {
		if (this.login && this.password === this.repeatPassword) {
			postRegistr(this.login, this.password, "User").then((res) => localStorage.setItem('token', res.token))
		} else {
			console.log("пароли не совпадают");

		}
	}

	render() {
		return (
			<RegistrStyle>
				<h2>SIGN UP</h2>
				<label>Логин</label>
				<input onChange={(e: any) => this.setLogin(e.target.value)} type="text" />
				<label >Пароль</label>
				<input type="password" onChange={(e: any) => this.setPassword(e.target.value)} />
				<label >Повторите пароль</label>
				<input type="password" onChange={(e: any) => this.setReapeatPassword(e.target.value)} />
				<div>
					<button onClick={this.loginButton}>Зарегистрироваться</button>
					<Link to="/" >Авторизация</Link>
				</div>
			</RegistrStyle>
		)
	}
}
export default Registr