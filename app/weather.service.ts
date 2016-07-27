import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { WEATHER_API_KEY }      from './api.config';


@Injectable()
export class WeatherService {
  constructor (private http: Http) {}
  private weatherUrl = 'http://localhost:3000/weather/';
  weatherlist (latlng): Observable<any[]> {
    let url = this.weatherUrl + latlng;
    return this.http.get(url)
                    .map(res=> res.json().daily)
                    .catch(this.handleError);
  }

  weathersummary (): Observable<any[]> {
    let params = new URLSearchParams();
    params.set('exclude', 'minutely, hourly, daily, alerts, flags');
    return this.http.get(this.weatherUrl, {search: params})
                    .map(res=>res.json().currently)
                    .catch(this.handleError);
  }

  private handleResponse(res: Response) {
    let body = res.json();
    return body.daily || [{}];
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
