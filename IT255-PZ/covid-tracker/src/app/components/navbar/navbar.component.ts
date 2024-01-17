import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionHolderService} from "../../services/session-holder.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router,public session:SessionHolderService) {
  }

  ngOnInit(): void {

  }

  logout() {
    this.session.logout();
    this.router.navigate(['/login']);
  }

}
