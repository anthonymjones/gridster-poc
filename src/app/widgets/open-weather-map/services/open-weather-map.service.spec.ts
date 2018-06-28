import { TestBed, inject } from '@angular/core/testing';

import { OpenWeatherMapService } from './open-weather-map.service';
import { HttpClientModule } from '@angular/common/http';

describe('OpenWeatherMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OpenWeatherMapService]
    });
  });

  test('should be created', inject([OpenWeatherMapService], (service: OpenWeatherMapService) => {
    expect(service).toBeTruthy();
  }));
});
