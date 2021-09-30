import {createAction, props} from "@ngrx/store";
import {IConfig} from "../../classes/users";

export namespace ConfigActions{
  export const getConfig = createAction('GET_CONFIG')

  export const getConfigSuccess = createAction('GET_CONFIG_SUCCESS', props<{payload: IConfig}>())
}
