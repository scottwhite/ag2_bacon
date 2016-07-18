import { Component } from '@angular/core';
import { WeatherIconComponent } from './weather-icon.component';
import { WeatherService } from './weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styles: ['ul { list-style: none }', 'li {cursor: pointer}'],
  directives: [WeatherIconComponent],
  providers: [WeatherService]
})

export class WeatherComponent {
  weather: any;
  error: any;
  constructor(private router: Router, private ws: WeatherService){
    this.weather = {data:[]};
  }
  ngOnInit() {
    this._list();
  }
  _list(){
    this.ws.weatherlist().subscribe(
      data => this.weather = <any>data,
      error => this.error = <any>error
    );
  }
  selectWeather(day){
    console.debug(day);
    this.router.navigate(['/weather/details']);
  }
}
