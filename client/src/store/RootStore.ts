import { IUserStore, UserStore } from "./user/UserStore";

export interface IRootStore {
	userStore: IUserStore;
	//sessionStore: ;
}
export interface IPropsRouters {
	rootStore: IRootStore
}

class RootStore implements IRootStore {
	userStore: IUserStore;
	constructor() {
		this.userStore = new UserStore(this)
	}
}

export default new RootStore()