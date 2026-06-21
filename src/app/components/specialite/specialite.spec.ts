import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialite } from './specialite';

describe('Specialite', () => {
  let component: Specialite;
  let fixture: ComponentFixture<Specialite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Specialite],
    }).compileComponents();

    fixture = TestBed.createComponent(Specialite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
