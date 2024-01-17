import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SessionHolderService} from "../../services/session-holder.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // @ts-ignore
  username: string;
  // @ts-ignore
  password: string;

  constructor(private session: SessionHolderService, private router: Router) {
  }


  login() {
    if (this.session.login(this.username, this.password)) {
      this.router.navigate(['/home-page']);
    } else {
      alert("Wrong data, try to use mock data (admin,admin)");
    }
  }
}
