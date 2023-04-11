import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepformComponent } from './stepform.component';

describe('StepformComponent', () => {
  let component: StepformComponent;
  let fixture: ComponentFixture<StepformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
