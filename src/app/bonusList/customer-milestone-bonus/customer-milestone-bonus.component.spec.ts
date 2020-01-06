import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMilestoneBonusComponent } from './customer-milestone-bonus.component';

describe('CustomerMilestoneBonusComponent', () => {
  let component: CustomerMilestoneBonusComponent;
  let fixture: ComponentFixture<CustomerMilestoneBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMilestoneBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMilestoneBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
