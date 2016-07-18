import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { GOOGLE_API_KEY }      from './api.config';


@Injectable()
export class LocationService {
  constructor (private http: Http) {}
  private autocompleteUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=' + GOOGLE_API_KEY;
  private placeDetailsUrl = 'https://maps.googleapis.com/maps/api/place/details/json?key=' + GOOGLE_API_KEY;

  places (search): Observable<any[]> {
    let params = new URLSearchParams();
    params.set('input', search);
    return this.http.get(this.autocompleteUrl, {search: params})
                    .map(res=> res.json().predictions)
                    .catch(this.handleError);
  }

  details (placeid): Observable<any> {
    let params = new URLSearchParams();
    params.set('palceid', placeid);
    return this.http.get(this.placeDetailsUrl, {search: params})
                    .map(res=> res.json())
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let msg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(msg); // log to console instead
    return Observable.throw(msg);
  }
}
