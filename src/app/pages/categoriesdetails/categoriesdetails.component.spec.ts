import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesdetailsComponent } from './categoriesdetails.component';

describe('CategoriesdetailsComponent', () => {
  let component: CategoriesdetailsComponent;
  let fixture: ComponentFixture<CategoriesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
