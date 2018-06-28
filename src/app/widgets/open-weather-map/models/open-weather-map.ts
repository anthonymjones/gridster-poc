// https://openweathermap.org/current#current_JSON

export interface OpenWeatherMapWeatherResponse {
  coord: OpenWeatherMapCoord;
  weather: OpenWeatherMapWeather;
  base: string;
  main: OpenWeatherMapMain;
  wind: OpenWeatherMapWind;
  clouds: OpenWeatherMapClouds;
  rain: OpenWeatherMapRain;
  snow: OpenWeatherMapSnow;
  dt: number;
  sys: OpenWeatherMapSys;
  id: number;
  name: string;
  cod: number;
}

export interface OpenWeatherMapCoord {
  lat: number;
  lon: number;
}

export interface OpenWeatherMapWeather {
  id: number;
  main: string;
  decription: string;
  icon: string;
}

export interface OpenWeatherMapMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

export interface OpenWeatherMapWind {
  speed: number;
  deg: number;
}

export interface OpenWeatherMapClouds {
  all: number;
}

export interface OpenWeatherMapRain {
  '3h': number;
}

export interface OpenWeatherMapSnow {
  '3h': number;
}

export interface OpenWeatherMapSys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
