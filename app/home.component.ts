import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'weather',
  templateUrl: '/app/home.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {
}
