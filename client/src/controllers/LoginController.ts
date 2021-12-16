import { postRequest } from "../http/utils";

export const postRegistr = (email: string, password: string, role: string) => {
	return postRequest(`/api/user/registration`, {}, { email, password, role }).then((res) => res.data)
}

export const postLogin = (email: string, password: string, role: string) => {
	return postRequest(`/api/user/login`, {}, { email, password, role }).then((res) => res.data)
}

export const getCheck = () => {
	return postRequest(`/api/user/auth`).then((res) => localStorage.setItem("token", res.data.token)
	)
}




