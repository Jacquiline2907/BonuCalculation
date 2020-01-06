import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedPositionBonucComponent } from './earned-position-bonuc.component';

describe('EarnedPositionBonucComponent', () => {
  let component: EarnedPositionBonucComponent;
  let fixture: ComponentFixture<EarnedPositionBonucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnedPositionBonucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnedPositionBonucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
