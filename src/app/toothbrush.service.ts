import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Toothbrush } from './toothbrush';

//Match the URL pattern in the @RestController
const restUrl ='/gatewayAPI';

@Injectable({
  providedIn: 'root'
})
export class ToothbrushService {

  	constructor(private http : HttpClient) { }
  	
  	onToothbrushAdd = new EventEmitter<Toothbrush>();
  
  	// Create a connection to the GET mapping in the
	// Rest controller that returns a collection of Toothbrush.
	getAll(): Observable<Toothbrush[]> {
		return this.http.get<Toothbrush[]>(restUrl + "/findAllToothbrushes");
	}
	
	//Create a connection to the POST mapping in the
	//rest controller. "data" will be the new Doctor.
	save(data: any): Observable<any> {
		return this.http.post(restUrl + "/saveToothbrush", data);
	}
	
	// Create a connection to the DELETE mapping in the
	// rest controller to delete a toothbrush by id.
	delete(id: number): Observable<any> {
		return this.http.delete(restUrl + "/deleteToothbrush/" + id);
	}
}
