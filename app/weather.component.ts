import { Component, Pipe } from '@angular/core';
import { WeatherIconComponent } from './weather-icon.component';
import { WeatherService } from './weather.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherDatePipe } from './weather.date.pipe';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styles: ['ul { list-style: none }', 'li {cursor: pointer}', '.weather-temp{display:inline-block;maring-right:10px;}'],
  directives: [WeatherIconComponent],
  providers: [WeatherService],
  pipes: [WeatherDatePipe]
})

export class WeatherComponent {
  weather: any;
  error: any;
  constructor(private route: ActivatedRoute, private router: Router, private ws: WeatherService){
    this.weather = {data:[]};
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
     let id = params['latlng'];
     this._list(id);
   });
  }
  _list(latlng){
    this.ws.weatherlist(latlng).subscribe(
      data => this.weather = <any>data,
      error => this.error = <any>error
    );
  }
  selectWeather(day){
    console.debug(day);
    this.router.navigate(['/weather/details']);
  }
}
