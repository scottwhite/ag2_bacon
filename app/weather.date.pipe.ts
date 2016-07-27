import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatWeatherDate'})
export class WeatherDatePipe implements PipeTransform {
  transform(value: any) {
    let d = new Date(value * 1000);
    return d.toDateString();
  }
}
