import { Component, Input } from '@angular/core';

declare var Skycons: any; //We want skycons, cause they are cool

@Component({
  selector: 'weather-icon',
  template: '<canvas [attr.id]="canvasid" width="{{width}}" height="{{height}}"></canvas>'
})

export class WeatherIconComponent {
  _size: string;
  width: number = 64;
  height: number = 64;

  ngAfterViewChecked(){
    // by default, icons are black but you can color them
    let skycons = new Skycons({"color": "gray"});
    skycons.add(this.canvasid, this.name);
    skycons.play();
  }

  @Input('id') canvasid: string;
  @Input() name: string;
  @Input()
  set size(s){
    if(s == 'large'){
      this.height = 128;
      this.width = 128;
    }else{
      this.height = 64;
      this.width =  64;
    }
  }
  get size(){return this._size;}
}
