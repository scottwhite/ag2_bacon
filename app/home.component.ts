import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { LocationService } from './location.service';
import { PlacesComponent } from './places.component';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'weather',
  templateUrl: './home.component.html',
  directives: [ROUTER_DIRECTIVES, PlacesComponent],
  providers: [LocationService]
})

export class HomeComponent {
  locations: any;
  err: any;

  constructor(private router: Router, private ls: LocationService){
    this.locations = {predictions:[]};
  }

  locationChange(evnt){
    if(evnt.charCode == 13){
      let value = evnt.target.value;
      this.ls.places(value).subscribe(
        places=> {console.debug(places);this.locations = <any>places},
        error => this.err = <any>error
      );
    }
  }

  weatherFor(placeid){
    console.debug(placeid);
    this.ls.details(placeid).subscribe(
      details=>{
        let loc = details.result.geometry.location;
        let latlng = loc.lat + ',' + loc.lng;
        this.router.navigate(['/weather', latlng]);
      },
      error=>this.err = error
    )
  }
}
