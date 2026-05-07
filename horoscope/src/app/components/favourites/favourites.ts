import { Component } from '@angular/core';
import { List } from '../memberList/list';
import { Add } from '../memberAdd/add';

@Component({
  selector: 'app-favourites',
  imports: [List, Add],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class Favourites {}
