import { getRequest } from "../http/utils";

export const getAllType = () => {
	return getRequest(`/api/type`).then((res) => res.data)
}