import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { MaterialModule } from '../../_module/material/material.module';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../services/product.service';
import { PeriodicElement } from '../../models/data/sample-table-data';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { tableFilterReducer } from '../../models/page-states/table.filter.reducer';
import { Observable } from 'rxjs';
import { StateModule } from '../../_module/state/state.module';
import { setFilter } from '../../models/page-states/table.filter.actions';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MaterialModule, StateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  tableFilter$: Observable<{ filters: any }>;
  tableFilterValue: any;

  constructor(
    private repositoryServices: RepositoryService,
    private _liveAnnouncer: LiveAnnouncer,
    private productService: ProductService,
    private store: Store<{ filters: any }>
  ) {
    this.tableFilter$ = store.select('filters');
  }

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.tableFilter$.subscribe({
      next: (value) => {
        console.log(value);
        this.tableFilterValue = value;
        // this.dataSource.sort = this.sort; // Assign MatSort instance
        // this.sort.active = this.tableFilterValue.active; // Set sort active field
        // this.sort.direction = this.tableFilterValue.direction; // Set sort direction
        // this.sort.sortChange.emit();
      },
    });
    // this.repositoryServices.getAllpost().subscribe({
    //   next: (value) => {
    //     this.dataSource = value;
    //   },
    // });
    this.dataSource = new MatTableDataSource(
      this.productService.getElementData()
    );
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
    // console.log(sortState);
    this.store.dispatch(setFilter(sortState));
  }
}
