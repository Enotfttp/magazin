import { makeObservable, observable } from "mobx";
import RootStore from "../RootStore";

export interface IUserStore {
	id: number,
	email: string,
	role: string,
	loggedIn: boolean,
	root: typeof RootStore
}

export class UserStore implements IUserStore {
	@observable loggedIn = false;
	id = 0;
	email = "";
	role = "";
	root: typeof RootStore
	constructor(root: typeof RootStore) {
		this.root = root;
		makeObservable(this)
	}
}