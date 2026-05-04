import { TestBed } from '@angular/core/testing';

import { Horoscope } from './horoscope';

describe('Horoscope', () => {
  let service: Horoscope;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Horoscope);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
