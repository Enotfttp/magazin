import { Link, useNavigate } from "react-router-dom";
import { postRegistr } from "../../controllers/LoginController";
import RegistrStyle from "./RegistrStyle";
const Registr = () => {
	let login: string = "";
	let password: string = "";
	let repeatPassword: string = "";
	const navigate = useNavigate()


	const setLogin = (event: string) => {
		login = event;
	}
	const setPassword = (event: string) => {
		password = event;
	}
	const setReapeatPassword = (event: string) => {
		repeatPassword = event;
	}
	const loginButton = (): void => {
		if (login && password === repeatPassword) {
			postRegistr(login, password, "User").then((res) => {
				console.log(res);
				localStorage.setItem('token', res.token)
			})
			navigate('/main')
		} else {
			console.log("пароли не совпадают");

		}
	}

	return (
		<RegistrStyle>
			<h2>SIGN UP</h2>
			<label>Логин</label>
			<input onChange={(e: any) => setLogin(e.target.value)} type="text" />
			<label >Пароль</label>
			<input type="password" onChange={(e: any) => setPassword(e.target.value)} />
			<label >Повторите пароль</label>
			<input type="password" onChange={(e: any) => setReapeatPassword(e.target.value)} />
			<div>
				<button onClick={loginButton}>Зарегистрироваться</button>
				<Link to="/" >Авторизация</Link>
			</div>
		</RegistrStyle>
	)
}
export default Registr