import {createReducer, on} from "@ngrx/store";
import {initialConfigState} from "../states/config.state";
import {ConfigActions} from "../actions/config.actions";

export const configReducers =createReducer(
  initialConfigState,
  on(ConfigActions.getConfig, (state)=>({...state})),
  on(ConfigActions.getConfigSuccess, (state,{payload})=>({
    ...state,
    config: payload
  }))
)
