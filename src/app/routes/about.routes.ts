import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';


export const aboutRoute: Routes = [    
    {
        path: '', 
        component: AboutComponent,
        title: 'About page'
    }
];
