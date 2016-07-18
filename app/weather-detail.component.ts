import { Component, Input } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherIconComponent } from './weather-icon.component';

@Component({
  selector: 'weather-detail',
  templateUrl:'./weather-detail.component.html',
  directives: [WeatherIconComponent],
  providers: [WeatherService]
})

export class WeatherDetailComponent {
  weather: any;
  error: any;

  constructor(private ws: WeatherService){
    this.weather = {};
  }

  ngOnInit() {
    this._list();
  }
  _list(){
    this.ws.weathersummary().subscribe(
      data => this.weather = <any>data,
      error => this.error = <any>error
    );
  }
}
