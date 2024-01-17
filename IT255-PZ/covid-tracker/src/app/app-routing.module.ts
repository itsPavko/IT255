import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GraphComponent} from './pages/graph/graph.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CovidDataComponent} from "./pages/covid-data/covid-data.component";
import {LoginComponent} from "./pages/login/login.component";
import {SecurityGuardService} from "./services/security-guard.service";

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent, canActivate:[SecurityGuardService]},
  {path: 'covid-data', component: CovidDataComponent,canActivate:[SecurityGuardService]},
  {path: 'graph', component: GraphComponent, canActivate:[SecurityGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
