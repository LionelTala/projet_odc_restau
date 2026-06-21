import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propos } from './propos';

describe('Propos', () => {
  let component: Propos;
  let fixture: ComponentFixture<Propos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Propos],
    }).compileComponents();

    fixture = TestBed.createComponent(Propos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
