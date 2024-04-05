import { Component } from '@angular/core';
import { Toothbrush } from '../toothbrush';
import { ToothbrushService } from '../toothbrush.service';

@Component({
  selector: 'app-toothbrush-show-all',
  standalone: true,
  imports: [],
  templateUrl: './toothbrush-show-all.component.html',
  styleUrl: './toothbrush-show-all.component.css'
})
export class ToothbrushShowAllComponent {
	
	toothbrushes: Toothbrush[] = [];

	// Connect to the Web Service
	constructor(private toothbrushService: ToothbrushService) { }
	
		// Update the list of doctors with the web service info
	getToothbrushes(): void {
		this.toothbrushService.getAll().subscribe({
			next: (data) => {
				this.toothbrushes = data;
			}
		})
	}
	
	ngOnInit(): void {
		this.getToothbrushes();
	}
	
	deleteToothbrush(id: any):void{
		if (confirm("Are you sure you want to delete Toothbrush " + id + "?")){
			this.toothbrushService.delete(id).subscribe({
				next: (data) =>{
				this.toothbrushes = data;
			}
		});
		}
	}
}
