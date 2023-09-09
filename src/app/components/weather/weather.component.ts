import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  @Input() latitude: any;
  @Input() longitude: any;
  weather: any = null;
  updateInterval: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.fetchWeatherData();
    this.updateInterval = setInterval(() => {
      this.weatherService
        .fetchWeather(this.latitude, this.longitude)
        .subscribe((result: any) => {
          this.weather.current_weather.temperature =
            result.current_weather.temperature;
        });
    }, 5 * 60 * 1000);
  }

  ngOnDestroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }

  fetchWeatherData() {
    this.weatherService
      .fetchWeather(this.latitude, this.longitude)
      .subscribe((result: any) => {
        this.weather = result;
      });
  }

  getWeatherIconPath(): string {
    const weatherIcons: { [key: number]: string } = {
      0: 'clear-sky',
      1: 'mainly-sky',
      2: 'mainly-sky',
      3: 'mainly-sky',
      45: 'fog',
      48: 'fog',
      51: 'drizzle',
      53: 'drizzle',
      55: 'drizzle',
      56: 'rain',
      57: 'rain',
      61: 'rain',
      63: 'rain',
      65: 'rain',
      71: 'snow',
      73: 'snow',
      75: 'snow',
      77: 'snow',
      80: 'shower',
      81: 'shower',
      82: 'shower',
      85: 'shower',
      86: 'shower',
      95: 'thunderstorm',
      96: 'strong-thunderstorm',
      99: 'strong-thunderstorm',
    };

    return weatherIcons[this.weather.current_weather.weathercode];
  }
}
