import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../app.counter.actions';
import { StateModule } from '../../_module/state/state.module';
import { MaterialModule } from '../../_module/material/material.module';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [StateModule, MaterialModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.scss',
})
export class MyCounterComponent {
  count$: Observable<number>;

  count: number = 0;

  constructor(private store: Store<{ counts: number }>) {
    this.count$ = store.select('counts');
  }

  ngOnInit(){
    console.log(this.count$);
  }

  increment() {
    this.count++;
    this.store.dispatch(increment());
  }

  decrement() {
    this.count--;
    this.store.dispatch(decrement());
  }

  reset() {
    this.count = 0;
    this.store.dispatch(reset());
  }
}
