import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeaceComponent } from './peace.component';

describe('PeaceComponent', () => {
  let component: PeaceComponent;
  let fixture: ComponentFixture<PeaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
