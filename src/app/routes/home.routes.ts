import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';


export const homeRoute: Routes = [    
    {
        path: '', 
        component: HomeComponent,
        title: 'Home page'
    }
];