import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByEmployeeIdComponent } from './search-by-employee-id.component';

describe('SearchByEmployeeIdComponent', () => {
  let component: SearchByEmployeeIdComponent;
  let fixture: ComponentFixture<SearchByEmployeeIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByEmployeeIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByEmployeeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
