import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAsyncComponent } from './multi-async.component';

describe('MultiAsyncComponent', () => {
  let component: MultiAsyncComponent;
  let fixture: ComponentFixture<MultiAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiAsyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
