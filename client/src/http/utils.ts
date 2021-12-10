import axios from "axios";
import { URI } from "../constans/Constans";

export const getRequest = (url: string, headers: any = {}, body: any = {}) => {
	return axios.get(`${URI}${url}`, headers)
}
export const postRequest = (url: string, headers: any = {}, body: any = {}) => {
	return axios.post(`${URI}${url}`, body, headers)
}
export const putRequest = (url: string, headers: any = {}, body: any = {}) => {
	return axios.put(`${URI}${url}`, body, headers)
}
export const deleteRequest = (url: string, headers: any = {}, body: any = {}) => {
	return axios.delete(`${URI}${url}`, {
		headers: headers,
		data: body
	})
}