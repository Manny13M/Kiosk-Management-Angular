import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothbrushShowAllComponent } from './toothbrush-show-all.component';

describe('ToothbrushShowAllComponent', () => {
  let component: ToothbrushShowAllComponent;
  let fixture: ComponentFixture<ToothbrushShowAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToothbrushShowAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToothbrushShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
