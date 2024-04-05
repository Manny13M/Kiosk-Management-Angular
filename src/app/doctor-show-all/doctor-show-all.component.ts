import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-show-all',
  standalone: true,
  imports: [],
  templateUrl: './doctor-show-all.component.html',
  styleUrl: './doctor-show-all.component.css'
})
export class DoctorShowAllComponent {

	doctors: Doctor[] = [];
	
	// Connect to the Web Service
	constructor(private doctorService: DoctorService){}
	
	// Update the list of doctors with the web service info
	getDoctors(): void {
		this.doctorService.getAll().subscribe({
			next: (data) => {
				this.doctors = data;
			}
		})
	}
	
	ngOnInit(): void {
		this.getDoctors();
	}
}
