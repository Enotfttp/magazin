import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../controllers/LoginController";
import LoginStyle from "./LoginStyle";



const Login = () => {
	let login = "";
	let password = "";
	const navigate = useNavigate()
	const setLogin = (event: string) => {
		login = event
	}
	const setPassword = (event: string) => {
		password = event;
	}
	const loginButton = (): void => {
		if (login && password) {
			postLogin(login, password, "USER").then((res) => {
				localStorage.setItem('token', res.token)
				navigate("/main")
				console.log("good");
			}).catch((e) => {
				console.log('error = ', e);
			})
		}
	}

	return (
		<>
			<LoginStyle>
				<h2>SIGN IN</h2>
				<label>Логин</label>
				<input onChange={(e: any) => setLogin(e.target.value)} type="text" />
				<label >Пароль</label>
				<input type="password" onChange={(e: any) => setPassword(e.target.value)} />
				<div>
					<button onClick={loginButton}>Войти</button>
					<Link to="/registr">Регитрация</Link>
				</div>
			</LoginStyle>

		</>
	)
}
export default Login
