import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySkillBtnsComponent } from './key-skill-btns.component';

describe('KeySkillBtnsComponent', () => {
  let component: KeySkillBtnsComponent;
  let fixture: ComponentFixture<KeySkillBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeySkillBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeySkillBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
