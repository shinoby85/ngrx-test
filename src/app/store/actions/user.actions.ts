import {createAction, props} from "@ngrx/store";
import {IUser} from "../../classes/users";

export namespace UserActions {
  export const getUsers = createAction('GET_USERS')

  export const getUsersSuccess = createAction('GET_USERS_SUCCESS', props<{payload: IUser[]}>())

  export  const getUser= createAction('GET_USER', props<{payload: number}>())

  export  const getUserSuccess = createAction('GET_USER_SUCCESS', props<{payload: IUser}>())
}
