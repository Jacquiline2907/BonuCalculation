import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastStartBonusComponent } from './fast-start-bonus.component';

describe('FastStartBonusComponent', () => {
  let component: FastStartBonusComponent;
  let fixture: ComponentFixture<FastStartBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastStartBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastStartBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
