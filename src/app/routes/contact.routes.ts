import { Routes } from '@angular/router';
import { ContactComponent } from '../pages/contact/contact.component';


export const contactRoute: Routes = [    
    {
        path: '', 
        component: ContactComponent,
        title: 'Contact page'
    }
];