import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothbrushAddComponent } from './toothbrush-add.component';

describe('ToothbrushAddComponent', () => {
  let component: ToothbrushAddComponent;
  let fixture: ComponentFixture<ToothbrushAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToothbrushAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToothbrushAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
