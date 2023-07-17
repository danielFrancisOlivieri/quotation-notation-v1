import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosophyDeathComponent } from './philosophy-death.component';

describe('PhilosophyDeathComponent', () => {
  let component: PhilosophyDeathComponent;
  let fixture: ComponentFixture<PhilosophyDeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilosophyDeathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilosophyDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
