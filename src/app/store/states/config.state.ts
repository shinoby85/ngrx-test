import {IConfig} from "../../classes/users";

export interface IConfigState {
  config: IConfig | null
}

export const initialConfigState: IConfigState = {
  config : null
}

