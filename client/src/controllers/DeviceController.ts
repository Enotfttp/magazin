import { getRequest } from "../http/utils";

export const getAllDevice = () => {
	return getRequest(`/api/device`).then((res) => res.data)
}