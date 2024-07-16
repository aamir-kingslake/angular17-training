import { createReducer, on } from '@ngrx/store';
import { setFilter } from './table.filter.actions';
import { SortDirection } from '@angular/material/sort';

export interface AboutState {
  /** The id of the column being sorted. */
  active: string;
  /** The sort direction. */
  direction: SortDirection;
}

export const initialState: AboutState = {
  active: '',
  direction: '',
};

const _tableFilterReducer = createReducer(
  initialState,
  on(setFilter, (state, { active, direction }) => ({
    ...state,
    active,
    direction,
  }))
);

export function tableFilterReducer(state: any, action: any) {
  return _tableFilterReducer(state, action);
}
