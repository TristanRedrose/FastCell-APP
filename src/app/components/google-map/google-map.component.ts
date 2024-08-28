import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {
  myLocation = {lat: 45.81012, lng: 15.99256}
  
  options: google.maps.MapOptions = {
    mapId: environment.maps_ID,
    center: this.myLocation,
    zoom: 16,
    disableDefaultUI: true,
  };

  createImgDiv(): HTMLDivElement | undefined {
    if (typeof window !== 'undefined') {
      let imgTag = document.createElement("div");
      imgTag.className = "custom-pin__container";

      imgTag.innerHTML = `
        <img src="assets/icons/logo-pin.png" class="custom-pin" alt="Google map store pin" style="height:48px; width:48px">
      `;

      return imgTag;
    }
    
    return;
  }

  
  markerOptions: google.maps.marker.AdvancedMarkerElementOptions = {
    position: this.myLocation,
    title: "Mobitronic servis d.o.o.",
    content: this.createImgDiv(),
  }
  
}
