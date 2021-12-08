import React from "react";
import LoginStyle from "./LoginStyle";

class Login extends React.Component {
	loginButton = (): void => {
		console.log('click');

	}

	render() {
		return (
			<>
				<LoginStyle>
					<div>
						<h2>Welcome</h2>
						<label>Логин</label>
						<input type="text" />
						<label >Пароль</label>
						<input type="password" />
						<button onClick={this.loginButton}>Войти</button>
					</div>
				</LoginStyle>

			</>
		)
	}
}
export default Login