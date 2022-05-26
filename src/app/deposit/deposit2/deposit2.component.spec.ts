import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deposit2Component } from './deposit2.component';

describe('Deposit2Component', () => {
  let component: Deposit2Component;
  let fixture: ComponentFixture<Deposit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deposit2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Deposit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
