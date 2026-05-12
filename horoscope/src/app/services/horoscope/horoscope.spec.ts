import { TestBed } from '@angular/core/testing';
import { HoroscopeService } from './horoscope';

describe('HoroscopeService', () => {
  let service: HoroscopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
