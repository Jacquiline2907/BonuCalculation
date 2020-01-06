import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailBonusCalculationComponent } from './retail-bonus-calculation.component';

describe('RetailBonusCalculationComponent', () => {
  let component: RetailBonusCalculationComponent;
  let fixture: ComponentFixture<RetailBonusCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailBonusCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailBonusCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
