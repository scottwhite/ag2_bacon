import {LocationService} from './location.service';
import { HTTP_PROVIDERS } from '@angular/http';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import { async, inject, beforeEach, addProviders, tick } from '@angular/core/testing';

describe('LocationService', () => {
  let ls;

  beforeEach(() =>{
    addProviders([HTTP_PROVIDERS, LocationService]);
  });

  beforeEach(inject([LocationService], s => {
    ls = s;
  }));



  it('should return a list of places', (done)=> {
    let data, err;
    ls.places('washington').subscribe(
      places =>{
        data = places;
        expect(data[0].description).toBe('Washington, DC, United States');
        done();
      },
      error=> {console.log('not working'); done()});
    }
  );

  it('should return the lat and long of a place',inject([LocationService], (ls)=> {
    let placeid = 'ChIJW-T2Wt7Gt4kRKl2I1CJFUsI';
    let data = ls.details(placeid);
    expect(data[0].result.geometry.location.lat).toBe(38.9071923)
  }));

});
