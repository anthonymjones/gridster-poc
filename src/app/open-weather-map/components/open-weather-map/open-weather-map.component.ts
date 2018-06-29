import { Component, OnInit } from '@angular/core';

import { OpenWeatherMapService } from '../../services/open-weather-map.service';
import { OpenWeatherMapWeatherResponse } from '../../models/open-weather-map';

@Component({
  selector: 'app-open-weather-map',
  templateUrl: './open-weather-map.component.html',
  styleUrls: ['./open-weather-map.component.scss']
})
export class OpenWeatherMapComponent implements OnInit {
  private readonly NEW_YORK_LAT = 40.73061;
  private readonly NEW_YORK_LON = -73.935242;

  lat: number;
  lon: number;
  weatherResp: Partial<OpenWeatherMapWeatherResponse>;

  constructor(private svc: OpenWeatherMapService) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(this.setCoords.bind(this), this.defaultCoords.bind(this));
  }

  private setCoords(pos: Position): void {
    const coords = pos.coords;
    this.lat = coords.latitude;
    this.lon = coords.longitude;

    this.getWeather();
  }

  private defaultCoords(): void {
    console.log('Couldn\'t set coords, defaulting to New York');
    this.lat = this.NEW_YORK_LAT;
    this.lon = this.NEW_YORK_LON;

    this.getWeather();
  }

  private getWeather(): void {
    this.svc.weather(this.lat, this.lon).subscribe(response => (this.weatherResp = response));
  }
}
