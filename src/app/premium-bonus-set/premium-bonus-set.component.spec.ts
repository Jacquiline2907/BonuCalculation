import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumBonusSetComponent } from './premium-bonus-set.component';

describe('PremiumBonusSetComponent', () => {
  let component: PremiumBonusSetComponent;
  let fixture: ComponentFixture<PremiumBonusSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumBonusSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumBonusSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
