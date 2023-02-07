import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MainService } from 'src/app/main.service';
import { ExampleActions } from "./example.actions";

@Injectable()
export class ExampleEffects {

  /**
   * Get Action and return Action
   */
  loadData$ = createEffect(() => this.actions$
  .pipe(
    ofType(ExampleActions.getData),
    mergeMap(() =>
      this.mainService.getAllData()
        .pipe(
          map(data => {
            return ExampleActions.getDataSuccess({data: data})}
            ),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private mainService: MainService
  ) {}
}
