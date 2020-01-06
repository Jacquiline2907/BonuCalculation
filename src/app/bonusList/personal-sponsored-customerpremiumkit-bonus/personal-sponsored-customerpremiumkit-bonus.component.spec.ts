import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSponsoredCustomerpremiumkitBonusComponent } from './personal-sponsored-customerpremiumkit-bonus.component';

describe('PersonalSponsoredCustomerpremiumkitBonusComponent', () => {
  let component: PersonalSponsoredCustomerpremiumkitBonusComponent;
  let fixture: ComponentFixture<PersonalSponsoredCustomerpremiumkitBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSponsoredCustomerpremiumkitBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSponsoredCustomerpremiumkitBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
