import { Component } from '@angular/core';
import { ListComponent } from '../memberList/list';
import { AddComponent } from '../memberAdd/add';

@Component({
  selector: 'app-favourites',
  imports: [ListComponent, AddComponent],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class FavouritesComponent {}
