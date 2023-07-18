import { Component, Input } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/modules/interfaces/weatherDatas.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
  // *@Input -> esta recebendo um dado de outro componente
  // *exclamação na frente quer dizer que quando carregar o componente a primeira vez pode ser
  // nulo ou undefined
  // Dados da previsão do tempo recebidos pelo componente pai
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidyIcon = faDroplet;
  windIcon = faWind;
}
