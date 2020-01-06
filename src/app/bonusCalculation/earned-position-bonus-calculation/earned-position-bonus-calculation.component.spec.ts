import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedPositionBonusCalculationComponent } from './earned-position-bonus-calculation.component';

describe('EarnedPositionBonusCalculationComponent', () => {
  let component: EarnedPositionBonusCalculationComponent;
  let fixture: ComponentFixture<EarnedPositionBonusCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnedPositionBonusCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnedPositionBonusCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
