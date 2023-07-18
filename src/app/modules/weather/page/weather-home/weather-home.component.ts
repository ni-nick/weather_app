import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/modules/interfaces/weatherDatas.interface';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  // tipo da interface WeatherDatas
  public weatherDatas!: WeatherDatas;

  public initialCityName = 'São Paulo';
  public searchIcon = faMagnifyingGlass;

  private readonly destroy$: Subject<void> = new Subject();

  constructor(private weatherService: WeatherService) {}

  // cada vez que roda esse componente é gerado tudo que estiver aqui dentro
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  // criação do método
  getWeatherDatas(cityName: string): void {
    // pipe estou passando a assinatura que quero me desinscrever
    this.weatherService
      .getWeatherDatas(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
          console.log(this.weatherDatas);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  // desmonta o componente quando sai da tela
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
