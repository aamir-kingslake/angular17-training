import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPreparationComponent } from './layout-preparation.component';

describe('LayoutPreparationComponent', () => {
  let component: LayoutPreparationComponent;
  let fixture: ComponentFixture<LayoutPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPreparationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
