import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolanoSeeingComponent } from './bolano-seeing.component';

describe('BolanoSeeingComponent', () => {
  let component: BolanoSeeingComponent;
  let fixture: ComponentFixture<BolanoSeeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolanoSeeingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolanoSeeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
