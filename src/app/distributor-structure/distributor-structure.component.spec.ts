import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorStructureComponent } from './distributor-structure.component';

describe('DistributorStructureComponent', () => {
  let component: DistributorStructureComponent;
  let fixture: ComponentFixture<DistributorStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
