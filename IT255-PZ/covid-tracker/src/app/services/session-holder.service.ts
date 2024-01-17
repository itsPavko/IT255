import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionHolderService {

  constructor() {
  }

  username: string = "admin";
  password: string = "admin";
  isLoggedIn = false;

  isLoggedInCheck() {
    return this.isLoggedIn;
  }

  logout(){
    this.isLoggedIn=false;
  }

  public login(username: string, password: string) : boolean{
    if (this.username == username && this.password == password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
}
