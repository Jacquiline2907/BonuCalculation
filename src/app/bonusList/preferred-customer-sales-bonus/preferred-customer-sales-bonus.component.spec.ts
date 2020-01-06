import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredCustomerSalesBonusComponent } from './preferred-customer-sales-bonus.component';

describe('PreferredCustomerSalesBonusComponent', () => {
  let component: PreferredCustomerSalesBonusComponent;
  let fixture: ComponentFixture<PreferredCustomerSalesBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferredCustomerSalesBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredCustomerSalesBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
