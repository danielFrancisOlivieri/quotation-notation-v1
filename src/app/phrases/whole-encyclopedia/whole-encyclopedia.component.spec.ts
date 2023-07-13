import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeEncyclopediaComponent } from './whole-encyclopedia.component';

describe('WholeEncyclopediaComponent', () => {
  let component: WholeEncyclopediaComponent;
  let fixture: ComponentFixture<WholeEncyclopediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholeEncyclopediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeEncyclopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
