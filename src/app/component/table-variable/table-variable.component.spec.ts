import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVariableComponent } from './table-variable.component';

describe('TableVariableComponent', () => {
  let component: TableVariableComponent;
  let fixture: ComponentFixture<TableVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
