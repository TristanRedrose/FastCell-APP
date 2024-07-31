import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {

  options: google.maps.MapOptions = {
    mapId: "870c049772b23413",
    center: {lat: 45.81012, lng: 15.99256},
    zoom: 16
  };
}
