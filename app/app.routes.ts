import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
import { WeatherComponent } from './weather.component';
import { WeatherDetailComponent } from './weather-detail.component';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'weather/:latlng', component: WeatherComponent },
  { path: 'weather/details', component: WeatherDetailComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
