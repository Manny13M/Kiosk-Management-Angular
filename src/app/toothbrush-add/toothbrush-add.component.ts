import { Component } from '@angular/core';
import { Toothbrush } from '../toothbrush';
import { ToothbrushService } from '../toothbrush.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-toothbrush-add',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './toothbrush-add.component.html',
  styleUrl: './toothbrush-add.component.css'
})
export class ToothbrushAddComponent {
	
	// Define options for employeeName dropdown
	doctors: Doctor[] = [];
	
	//Empty student record
	toothbrush: Toothbrush = {
		id: 0,
		name: '',
		price: 0,
		quantity: 0,
		employeeName: ''
	}
	
	//Connect to connect the Student Service component
	constructor(private toothbrushService: ToothbrushService, private doctorService: DoctorService) { }
	
		// Update the list of doctors with the web service info
	getDoctors(): void {
		this.doctorService.getAll().subscribe({
			next: (data) => {
				this.doctors = data;
				console.log('Doctors Printed:', this.doctors); // Log doctors array to console

			}
		})
	}
	
	ngOnInit(): void {
		this.getDoctors();
	}
	
	//Method called by the HTML button
	saveToothbrush(): void{
		
		//Read in the fields from the inputs
		const data = {
			name: this.toothbrush.name,
			price: this.toothbrush.price,
			quantity: this.toothbrush.quantity,
			employeeName: this.toothbrush.employeeName
		};
	
		console.log(data);
		//Submit the toothbrush record to the Rest Controller
		this.toothbrushService.save(data).subscribe(
			(data: Toothbrush) => this.toothbrushService.onToothbrushAdd.emit(data)
		);
		
		this.toothbrush = {
			id: 0,
			name: '',
			price: 0,
			quantity: 0,
			employeeName: ''
		}
	}
	


}
