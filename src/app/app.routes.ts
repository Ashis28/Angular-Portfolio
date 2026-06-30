import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Experience } from './experience/experience';

export const routes: Routes = [
    {
        path : "",
        component : Home
    },
    {
        path : "experience",
        component : Experience
    },{
        path : "**",
        component : Home
    },
    
];
