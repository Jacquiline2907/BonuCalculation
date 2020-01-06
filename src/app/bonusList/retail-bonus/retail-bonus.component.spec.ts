import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailBonusComponent } from './retail-bonus.component';

describe('RetailBonusComponent', () => {
  let component: RetailBonusComponent;
  let fixture: ComponentFixture<RetailBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
