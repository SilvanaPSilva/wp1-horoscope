import { Component } from '@angular/core';
import { Horoscope } from '../../services/horoscope/horoscope';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  sign = '';
  loading = false;

  horoscopeResult: any = null;

  constructor(private horoscopeService: Horoscope) { }

  getToday() {
    this.loading = true;
    this.horoscopeResult = null;

    this.horoscopeService.getToday(this.sign).subscribe((data) => {
      this.horoscopeResult = data;

      console.log(data);

      this.loading = false;
    });
  }

  getTomorrow() {
    this.loading = true;
    this.horoscopeResult = null;

    this.horoscopeService.getTomorrow(this.sign).subscribe((data) => {
      this.horoscopeResult = data;

      console.log(data);

      this.loading = false;
    });
  }

  getMonthly() {
    this.loading = true;
    this.horoscopeResult = null;

    this.horoscopeService.getMonthly(this.sign).subscribe((data) => {
      this.horoscopeResult = data;

      console.log(data);

      this.loading = false;
    });
  }


}
