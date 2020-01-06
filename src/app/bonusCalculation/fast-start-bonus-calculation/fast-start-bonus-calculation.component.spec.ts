import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastStartBonusCalculationComponent } from './fast-start-bonus-calculation.component';

describe('FastStartBonusCalculationComponent', () => {
  let component: FastStartBonusCalculationComponent;
  let fixture: ComponentFixture<FastStartBonusCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastStartBonusCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastStartBonusCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
