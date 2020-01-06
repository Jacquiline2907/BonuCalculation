import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeBonusCalculationComponent } from './volume-bonus-calculation.component';

describe('VolumeBonusCalculationComponent', () => {
  let component: VolumeBonusCalculationComponent;
  let fixture: ComponentFixture<VolumeBonusCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeBonusCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeBonusCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
