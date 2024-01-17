import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {SessionHolderService} from "./session-holder.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityGuardService implements CanActivate{

  constructor(private session:SessionHolderService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.isLoggedIn;
  }
}
