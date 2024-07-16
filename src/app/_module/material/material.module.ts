import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatButtonModule, MatTableModule, MatSortModule],
})
export class MaterialModule {}
