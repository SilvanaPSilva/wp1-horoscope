import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InterfaceMember } from '../../models/interfaceMember';
import { HoroscopeService } from '../../services/horoscope/horoscope';
import { MembersService } from '../../services/members/members';


@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class HomeComponent implements OnInit {

  sign = '';
  loading = false;

  periodDaily = false;
  periodMonthly = false;

  horoscopeResult: any = null;
  todayBirthdays: InterfaceMember[] = [];/* CHATGP */

  constructor(
    private horoscopeService: HoroscopeService,
    private membersService: MembersService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadTodayBirthdays();
  }

  selectSign(sign: string) {
    this.sign = sign;
    this.clearResult();
  }

  //Method Clear Result
  clearResult() {
    this.horoscopeResult = null;
    this.loading = false;
    this.periodDaily = false;
    this.periodMonthly = false;
  }

  //Method showup the Birthday Members of the day
  loadTodayBirthdays() {
    this.membersService.getMembers().subscribe((data: InterfaceMember[]) => {
      const today = new Date();

      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');

      const todayDate = `${day}/${month}`;

      this.todayBirthdays = data.filter(member =>
        member.birthday === todayDate
      );
    });
  }

  getToday() {

    if (!this.sign) {
      alert('Choose a sign first');
      return;
    }

    this.clearResult();
    this.loading = true;

    console.log('SIGN SENT:', this.sign);
    this.horoscopeService.getToday(this.sign).subscribe({
      next: (data: any) => {

        try {

          if (data.status === false) {
            alert(data.error);
            this.loading = false;
            return;
          }

          this.horoscopeResult = data;
          this.periodDaily = true;
          this.periodMonthly = false;
          this.loading = false;
          this.cd.detectChanges();

          console.log('RESULT SAVED');

        } catch (err) {

          console.log('NEXT ERROR:', err);

        }
      },
    });
  }

  // TOMORROW
  getTomorrow() {

    if (!this.sign) {
      alert('Choose a sign first');
      return;
    }

    this.clearResult();
    this.loading = true;

    console.log('SIGN SENT:', this.sign);

    this.horoscopeService.getTomorrow(this.sign).subscribe({
      next: (data: any) => {
        console.log('DATA RECEIVED:', data);
        if (data.status === false) {
          alert(data.error);
          this.loading = false;
          return;
        }

        this.horoscopeResult = data;
        this.periodDaily = true;
        this.periodMonthly = false;
        this.loading = false;
        this.cd.detectChanges();
      },

      error: (err) => {
        console.log('ERROR:', err);
        this.loading = false;
        this.cd.detectChanges();
      }
    });
  }

  // MONTHLY
  getMonthly() {

    if (!this.sign) {
      alert('Choose a sign first');
      return;
    }

    this.clearResult();
    this.loading = true;

    console.log('SIGN SENT:', this.sign);
    this.horoscopeService.getMonthly(this.sign).subscribe({
      next: (data: any) => {
        console.log('DATA RECEIVED:', data);
        if (data.status === false) {
          alert(data.error);
          this.loading = false;
          return;
        }

        this.horoscopeResult = data;
        this.periodDaily = false;
        this.periodMonthly = true;
        this.loading = false;
        this.cd.detectChanges();
      },

      error: (err) => {
        console.log('ERROR:', err);
        this.loading = false;
        this.cd.detectChanges();
      }
    });
  }
}