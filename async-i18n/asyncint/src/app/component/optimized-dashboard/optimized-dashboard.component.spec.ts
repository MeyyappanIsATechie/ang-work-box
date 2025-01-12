import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedDashboardComponent } from './optimized-dashboard.component';

describe('OptimizedDashboardComponent', () => {
  let component: OptimizedDashboardComponent;
  let fixture: ComponentFixture<OptimizedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizedDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
