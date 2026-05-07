import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Favourites } from './components/favourites/favourites';
import { About } from './components/about/about';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'favourites',
        component: Favourites,
    },
    {
        path: 'about',
        component: About,   
    }
];
