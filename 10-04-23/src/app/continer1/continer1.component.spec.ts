import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Continer1Component } from './continer1.component';

describe('Continer1Component', () => {
  let component: Continer1Component;
  let fixture: ComponentFixture<Continer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Continer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Continer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
