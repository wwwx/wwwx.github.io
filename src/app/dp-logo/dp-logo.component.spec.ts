import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpLogoComponent } from './dp-logo.component';

describe('DpLogoComponent', () => {
  let component: DpLogoComponent;
  let fixture: ComponentFixture<DpLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
