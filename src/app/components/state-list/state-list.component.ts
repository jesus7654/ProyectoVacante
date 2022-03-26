import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../../services/service.index";

@Component({
  selector: "app-state-list",
  templateUrl: "./state-list.component.html",
  styles: ["li {cursor:pointer}"]
})
export class StateListComponent implements OnInit {
  listCountri: Array<string> = [];
  detailCountri: Array<String> = [];
  constructor(public _countries: CountriesService) {}
  ngOnInit(): void {
    this._countries
      .getCountries()
      .then((res) => res.json())
      .then((respuesta) => {
        this.listCountri = respuesta;
      });
  }

  detail(item) {
    this._countries
      .getCountrie(item)
      .then((res) => res.json())
      .then((respuesta) => {
        this.detailCountri = respuesta[0];
        const data = respuesta[0];
        document.getElementById("titleModal").innerText = data.name.official;
        document.getElementById("comun").innerText = data.name.common;
        document.getElementById("region").innerText = data.region;
        document.getElementById("subregion").innerText = data.subregion;
        document.getElementById("nombreO").innerText = data.name.official;
        let lenguages: Array<string> = [];
        Object.keys(data.languages).forEach((element) => {
          lenguages.push(data.languages[element]);
        });
        document.getElementById("idiomas").innerText = lenguages.join(", ");
        let monedas: Array<string> = [];
        Object.keys(data.currencies).forEach((item) => {
          monedas.push(data.currencies[item].name);
        });

        document.getElementById("moneda").innerText = monedas.join(", ");
      });
  }
}
