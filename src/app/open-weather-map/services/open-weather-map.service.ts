import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { OpenWeatherMapWeatherResponse } from '../models/open-weather-map';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {
  /**
   * This is a private API key generated for the account: developers@briebug.com
   * Normally this would be stored in a more secure manner, but for the sake of speed
   * and simplicity this is being stored in source code.
   */
  private static readonly API_KEY = '851d468d603c3dc360dad053e597ab32';
  private static readonly BASE_URL = 'https://api.openweathermap.org/data/2.5';
  private static readonly STORAGE_EXPIRATION = 10 * 60 * 1000; // suggested query interval is 10 minutes

  constructor(private http: HttpClient) {}

  public weather(lat: number, lon: number): Observable<Partial<OpenWeatherMapWeatherResponse>> {
    const roundedLat = Math.round(lat * 100) / 100;
    const roundedLon = Math.round(lon * 100) / 100;
    const url = this.url('weather', roundedLat, roundedLon);
    const expiryKey = this.storageExpiryKey(url);

    const previousResp = this.nonexpiredCachedResponse(url, expiryKey);
    if (previousResp) {
      return of(JSON.parse(previousResp));
    }

    return this.http
      .get<Partial<OpenWeatherMapWeatherResponse>>(url)
      .pipe(tap(resp => this.cacheResponse(resp, url, expiryKey)));
  }

  private nonexpiredCachedResponse(url: string, expiryKey: string): string {
    const previousResp = localStorage.getItem(url);
    const previousRespTime = localStorage.getItem(expiryKey);

    if (
      previousResp &&
      previousRespTime &&
      Date.now() - parseInt(previousRespTime, 10) < OpenWeatherMapService.STORAGE_EXPIRATION
    ) {
      return previousResp;
    }
  }

  private cacheResponse(resp: Partial<OpenWeatherMapWeatherResponse>, url: string, expiryKey: string): void {
    localStorage.setItem(url, JSON.stringify(resp));
    localStorage.setItem(expiryKey, `${Date.now()}`);
  }

  private storageExpiryKey(url: string): string {
    return `owa_time_${url}`;
  }

  private url(path: string, lat: number, lon: number): string {
    // intentionally not using HttpParams, as the full URL is used in the cache key
    return `${OpenWeatherMapService.BASE_URL}/${path}?units=imperial&lat=${lat}&lon=${lon}&appid=${
      OpenWeatherMapService.API_KEY
    }`;
  }
}
