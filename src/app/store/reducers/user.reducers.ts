import {initialUserState, IUserState} from "../states/user.state";
import {UserActions} from "../actions/user.actions";
import { createReducer, on} from "@ngrx/store";

export const userReducers = createReducer(
  initialUserState,
  on(UserActions.getUsers,(state)=>({...state})),
  on(UserActions.getUser, (state)=>({...state})),
  on(UserActions.getUsersSuccess,(state,{payload})=>({
    ...state,
    users: payload
  })),
  on(UserActions.getUserSuccess,(state,{payload})=>({
    ...state,
    selectedUser: payload
  }))
)

