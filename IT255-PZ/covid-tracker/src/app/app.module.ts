import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DataCardComponent} from './components/data-card/data-card.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CountrySelectionComponent} from './components/country-selection/country-selection.component';
import {HttpClientModule} from '@angular/common/http'
import {CovidDataService} from './services/covid-data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GraphComponent} from './pages/graph/graph.component';
import { CovidDataComponent } from './pages/covid-data/covid-data.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataCardComponent,
    HomePageComponent,
    CountrySelectionComponent,
    GraphComponent,
    CovidDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CovidDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
