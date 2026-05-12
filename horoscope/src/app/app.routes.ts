import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { FavouritesComponent } from './components/favourites/favourites';
import { AboutComponent } from './components/about/about';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'favourites',
        component: FavouritesComponent,
    },
    {
        path: 'about',
        component: AboutComponent,   
    }
];
