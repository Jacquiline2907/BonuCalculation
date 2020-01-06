import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeBonusComponent } from './volume-bonus.component';

describe('VolumeBonusComponent', () => {
  let component: VolumeBonusComponent;
  let fixture: ComponentFixture<VolumeBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
