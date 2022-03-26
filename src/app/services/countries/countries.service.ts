import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  constructor() {}

  getCountries() {
    return fetch("https://restcountries.com/v3.1/all");
  }

  getCountrie(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}`);
  }
}
