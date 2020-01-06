import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationPlansComponent } from './compensation-plans.component';

describe('CompensationPlansComponent', () => {
  let component: CompensationPlansComponent;
  let fixture: ComponentFixture<CompensationPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
