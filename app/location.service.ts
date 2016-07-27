import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class LocationService {
  constructor (private http: Http) {}
  private autocompleteUrl = 'http://localhost:3000/locations/';
  private placeDetailsUrl = 'http://localhost:3000/locations/details/';

  places (search): Observable<any> {
    let url = this.autocompleteUrl + search;
    let i=0;
    return this.http.get(url)
                    .map(res=> res.json())
                    .catch(this.handleError);
  }

  details (placeid): Observable<any> {
    let url = this.placeDetailsUrl + placeid;
    return this.http.get(url)
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
