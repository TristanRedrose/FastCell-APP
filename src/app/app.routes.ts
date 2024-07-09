import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';


export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        title: 'base-layout',
        children: [
            {
                path: '', 
                component: HomeComponent,
                title: 'Home page'
            },
            {
                path: 'about', 
                component: AboutComponent,
                title: 'Home page'
            }
        ]
    }
];
