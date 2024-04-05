import { Component } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-add',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './doctor-add.component.html',
  styleUrl: './doctor-add.component.css'
})
export class DoctorAddComponent {

	//Empty doctor record
	doctor: Doctor={
		id:0,
		name:'',
	}
	
	//Connect to connect the Doctor Service component
	constructor(private doctorService: DoctorService){}
	
	//Method called by the HTML button
	saveDoctor(): void{
		
		//Read in the fields from the inputs
		const data = {
			name: this.doctor.name,
		};
	
		//Submit the doctor record to the Rest Controller
		this.doctorService.save(data).subscribe(
			(data: Doctor) => this.doctorService.onDoctorAdd.emit(data)
		);
		
		this.doctor = {
			id:0,
			name:'',
		}
	}
}
