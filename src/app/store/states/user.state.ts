import {IUser} from "../../classes/users";


export interface IUserState {
  users: IUser[] | null;
  selectedUser: IUser | null;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
}
