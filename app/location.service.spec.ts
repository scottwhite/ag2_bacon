import {LocationService} from './location.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { inject, beforeEach, addProviders } from '@angular/core/testing';

describe('LocationService', () => {
  let ls;

  beforeEach(inject([LocationService], (_ls) =>{
    ls = _ls;
    addProviders([HTTP_PROVIDERS]);
  }));

  it('should return a list of places', done => {
    let data = ls.places('washington');
    expect(data[0].description).toBe('Washington, DC, United States');
  });

  it('should return the lat and long of a place', done => {
    let placeid = 'ChIJW-T2Wt7Gt4kRKl2I1CJFUsI';
    let data = ls.details(placeid);
    expect(data[0].result.geometry.location.lat).toBe(38.9071923)
  });

});
