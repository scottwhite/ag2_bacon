import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import './styles/main.css';
import './rxjs-operators';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'main-app',
  templateUrl: '/app/app.component.html',
  styleUrls: ['/app/app.component.css'],
  providers: [HTTP_PROVIDERS, JSONP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  // skycons: any;

  // constructor(){
  //   this.skycons = Skycons;
  // }
}
