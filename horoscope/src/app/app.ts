import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './components/memberList/list';
import { Add } from './components/memberAdd/add';
import { Home } from './components/home/home';
import { Favourites } from './components/favourites/favourites';
import { About } from './components/about/about';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, List, Add, Home, Favourites, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('horocope');
}
