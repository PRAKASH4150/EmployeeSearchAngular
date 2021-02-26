import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeByNameComponent } from './search-employee-by-name.component';

describe('SearchEmployeeByNameComponent', () => {
  let component: SearchEmployeeByNameComponent;
  let fixture: ComponentFixture<SearchEmployeeByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmployeeByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmployeeByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
