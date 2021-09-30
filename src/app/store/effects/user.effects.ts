import {Injectable} from "@angular/core";
import {createEffects} from "@ngrx/effects/src/effects_module";
import {Actions, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../states/app.state";
import {UserActions} from "../actions/user.actions";
import {withLatestFrom} from "rxjs/operators";

@Injectable()
export class UserEffects{
  getUser$ = createEffects(()=>this.actions$.pipe(
    ofType(UserActions.getUser),
    map(action=>action.payload),
    withLatestFrom(this.store$.pipe(select(selectUserList)))
  ))



  constructor(private actions$: Actions, private store$: Store<IAppState>) {
  }

}
