import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  x: any
  constructor(
    private _socket : SocketService
  ) { }

  ngOnInit(): void {
    this.socketCon();
    // this.x = document.getElementById("demo");
    // this.getLocation()
  }

  getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition.bind( this ));
      } else {
        this.x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

    showPosition(position ) {

      this.x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    }

  socketCon() {
    this._socket.socketconnect();
  }

}
