import { Routes } from '@angular/router';
import { AnimationManagementComponent } from './component/animation-management/animation-management.component';

export const routes: Routes = [
  { 
    path: 'animation', 
    component: AnimationManagementComponent 
  },
  // Add a default route if needed
  { 
    path: '', 
    redirectTo: '/animation', 
    pathMatch: 'full' 
  }
];
