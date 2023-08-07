import { Component } from '@angular/core';
import { Country } from './country';
import { City } from './city';

@Component({
  selector: 'app-root',
  template: `
  <h1>Countries and Cities</h1>
  <ul>
    <li *ngFor="let country of countries">
      {{ country.name }} (Capital: {{ country.capital }}) - Population: {{ country.population }}
      <ul>
        <li *ngFor="let city of getCitiesByCountry(country.name)">
          {{ city.name }} - Population: {{ city.population }}
        </li>
      </ul>
    </li>
  </ul>
`
styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = [
    {
      name: 'Contry 1',
      capital: 'Capital 1',
      population: 1000000,
    }
  ];

  ciities: City[] = [
    {
      name: 'City 1',
      population: 500000,
      country: 'Country 1',
    }
  ];

  getCitiesByCountry(countryName: string): City[] {
    return this.cities.filter((city) => city.country === countryName);
  }
}
