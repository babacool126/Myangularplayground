import { Component } from '@angular/core';
import { Country } from './country';
import { City } from './city';

@Component({
  selector: 'app-root',
  template: `
  <div class="container mt-5">
    <h1 class="mb-4">Countries and Cities</h1>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let country of countries">
            <strong>{{ country.name }}</strong> (Capital: {{ country.capital }}) - Population: {{ country.population }}
            <ul class="mt-2">
                <li *ngFor="let city of getCitiesByCountry(country.name || 'DefaultCountry')">
                    {{ city.name }} - Population: {{ city.population }}
                </li>
            </ul>
        </li>
    </ul>
</div>
`,
styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = [
    {
      name: 'Country 1',
      capital: 'Capital 1',
      population: 1000000,
    }
  ];

  cities: City[] = [
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
