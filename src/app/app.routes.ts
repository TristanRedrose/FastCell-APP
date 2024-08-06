import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        title: 'base-layout',
        children: [
            {
                path: '', 
                loadChildren: () => import("./routes/home.routes")
                .then(r => r.homeRoute)
            },
            {
                path: 'about', 
                loadChildren: () => import("./routes/about.routes")
                .then(r => r.aboutRoute)
            },
            {
                path: 'contact', 
                loadChildren: () => import("./routes/contact.routes")
                .then(r => r.contactRoute)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    }
];
