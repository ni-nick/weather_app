import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable diz que esse serviço pode ser injetado em um componente
@Injectable({
  // onde vai ser injetada, como esta 'root', qualquer componente tem acesso a esse serviço
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'b4337f4fad0f9d2fb54b24b1bd5d0ca9';

  constructor(private http: HttpClient) {}

  // Método
  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}
