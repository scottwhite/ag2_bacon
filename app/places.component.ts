import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'places',
  templateUrl: './places.component.html',
  styles: ['ul { list-style: none }', 'li {cursor: pointer;}'],
})

export class PlacesComponent {
  _loc: any;

  @Input() locations: any;

  @Output() onSelected = new EventEmitter<boolean>();

  selectPlace(place){
    this.onSelected.emit(place.place_id);
  }
}
