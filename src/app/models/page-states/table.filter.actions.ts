import { SortDirection } from '@angular/material/sort';
import { createAction, props } from '@ngrx/store';

export const setFilter = createAction(
  '[About Component] SetFilter',
  props<{
    /** The id of the column being sorted. */
    active: string;
    /** The sort direction. */
    direction: SortDirection;
  }>()
);
