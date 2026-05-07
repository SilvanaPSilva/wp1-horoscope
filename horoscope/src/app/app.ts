import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './components/memberList/list';
import { Add } from './components/memberAdd/add';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, List, Add],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('horocope');
}
