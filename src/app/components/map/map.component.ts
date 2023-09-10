import { Component, Input, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  @Input() latitude: any;
  @Input() longitude: any;
  @Input() thumbnail: any;

  options: any;

  constructor() {}

  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }),
        marker([this.latitude, this.longitude], {
          icon: icon({
            iconUrl: this.thumbnail,
          }),
        }),
      ],
      zoom: 7,
      center: latLng(this.latitude, this.longitude),
    };
  }
}
