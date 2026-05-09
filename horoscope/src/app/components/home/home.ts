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

  periodDaily = false;
  periodMonthly = false;

  loading = false;


  horoscopeResult: any = null;

  constructor(private horoscopeService: Horoscope) { }

  selectSign(sign: string) {
  this.sign = sign;
  this.horoscopeResult = null;
  this.loading = false;
  this.periodDaily = false;
  this.periodMonthly = false;
}

  clearResult() {
    this.horoscopeResult = null;
    this.loading = false;
    this.periodDaily = false;
    this.periodMonthly = false;
  }

  getToday() {

    /* CHATGPT */
    if (!this.sign) {
      alert('Choose a sign first');
      return;
    }

    console.log('SIGN SENT:', this.sign);

    this.loading = true;
    this.horoscopeResult = null;
    /* CHATGPT */

    this.periodDaily = true;
    this.periodMonthly = false;

    this.horoscopeService.getToday(this.sign).subscribe({
      next: (data) => {
        this.horoscopeResult = data;
        this.loading = false;
      },
      //console.log(data);

      /* CHATGPT */
      error: (err) => {
        console.log(err);
        this.loading = false;
      }/* CHATGPT */

    });
  }

  getTomorrow() {

    /* CHATGPT */
    if (!this.sign) {
      alert('Choose a sign first');
      return;
    }

    console.log('SIGN SENT:', this.sign);

    this.loading = true;
    this.horoscopeResult = null;
    /* CHATGPT */

    this.periodDaily = true;
    this.periodMonthly = false;

    this.horoscopeService.getTomorrow(this.sign).subscribe({
      next: (data) => {
        this.horoscopeResult = data;
        this.loading = false;
      },
      //console.log(data);

      /* CHATGPT */
      error: (err) => {
        console.log(err);
        this.loading = false;
      }/* CHATGPT */

    });
  }

  getMonthly() {

    /* CHATGPT */
    if (!this.sign) {
      alert('Choose a sign first');
      return;
    }

    console.log('SIGN SENT:', this.sign);

    this.loading = true;
    this.horoscopeResult = null;

    /* CHATGPT */
    this.periodDaily = false;
    this.periodMonthly = true;

    this.horoscopeService.getMonthly(this.sign).subscribe({
      next: (data) => {
        this.horoscopeResult = data;
        this.loading = false;
      },

      error: (err) => {
        console.log(err);
        alert('Error loading horoscope');
        this.loading = false;
      }
    });
  }
}
