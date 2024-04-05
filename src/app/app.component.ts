import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DoctorShowAllComponent } from './doctor-show-all/doctor-show-all.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { ToothbrushShowAllComponent } from './toothbrush-show-all/toothbrush-show-all.component';
import { ToothbrushAddComponent } from './toothbrush-add/toothbrush-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
	  CommonModule, 
	  RouterOutlet, 
	  RouterModule,
	  DoctorShowAllComponent, 
	  DoctorAddComponent, 
	  ToothbrushShowAllComponent, 
	  ToothbrushAddComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kiosk-Management-Angular';
}
