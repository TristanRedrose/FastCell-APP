import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';


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
