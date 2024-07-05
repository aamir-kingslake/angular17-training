import { Component } from '@angular/core';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { KendoModule } from '../../_module/kendo/kendo.module';
import { RouterLink } from '@angular/router';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-layout-preparation',
  standalone: true,
  imports: [CommonModule, KendoModule, RouterLink],
  // providers: [ProductService],
  templateUrl: './layout-preparation.component.html',
  styleUrl: './layout-preparation.component.scss',
})
export class LayoutPreparationComponent {
  // ...
  public gridItems: Observable<GridDataResult> | undefined;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number | null = null;

  // ...
  constructor(private service: ProductService) {
    this.loadGridItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.gridItems = this.service.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }
}
