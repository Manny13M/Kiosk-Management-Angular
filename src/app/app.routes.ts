import { Routes } from '@angular/router';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorShowAllComponent } from './doctor-show-all/doctor-show-all.component';
import { ToothbrushAddComponent } from './toothbrush-add/toothbrush-add.component';
import { ToothbrushShowAllComponent } from './toothbrush-show-all/toothbrush-show-all.component';

export const routes: Routes = [
	{'path':'', component: DoctorShowAllComponent},
	{'path':'viewDoctors', component: DoctorShowAllComponent},
	{'path':'addDoctor', component: DoctorAddComponent},
	{'path':'viewToothbrushes', component: ToothbrushShowAllComponent},
	{'path':'addToothbrush', component: ToothbrushAddComponent},
	
];
