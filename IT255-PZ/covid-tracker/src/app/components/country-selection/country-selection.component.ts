import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CovidData } from 'src/app/models/covidData';
import { CovidDataService } from 'src/app/services/covid-data.service';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.css']
})
export class CountrySelectionComponent implements OnInit {

  @Output() countryEmitter: EventEmitter<string> = new EventEmitter<string>();
  covidDataObjects: CovidData[] = [];
  errorMessage: any;
  selectControl: FormControl = new FormControl();

  constructor(private _covidDataService: CovidDataService) { }

  ngOnInit(): void {
    this._covidDataService.getCovidData()
      .subscribe((data: CovidData[]) => {
      this.covidDataObjects = data;
      this.covidDataObjects.pop();
      this.covidDataObjects.sort((a, b) => a.country.localeCompare(b.country));
    },
    (error: any) => {
      this.errorMessage = error.error.message;
    })
  }

  sendCountry(country: string){
    this.countryEmitter.emit(country);
  }

  resetCountry(){
    this.countryEmitter.emit("World");
    this.selectControl.reset();
  }

}
