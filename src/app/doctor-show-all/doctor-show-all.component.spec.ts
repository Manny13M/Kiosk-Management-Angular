import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorShowAllComponent } from './doctor-show-all.component';

describe('DoctorShowAllComponent', () => {
  let component: DoctorShowAllComponent;
  let fixture: ComponentFixture<DoctorShowAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorShowAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
