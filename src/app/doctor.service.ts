import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Doctor } from './doctor';

//Match the URL pattern in the @RestController
const restUrl ='/gatewayAPI';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

	constructor(private http : HttpClient) { }
	
	onDoctorAdd = new EventEmitter<Doctor>();
  
	// Create a connection to the GET mapping in the
	// Rest controller that returns a collection of Doctors.
	getAll(): Observable<Doctor[]> {
		return this.http.get<Doctor[]>(restUrl + "/findAllDoctors");
	}
	
	//Create a connection to the POST mapping in the
	//rest controller. "data" will be the new Doctor.
	save(data: any): Observable<any> {
		return this.http.post(restUrl + "/saveDoctor", data);
	}
}
