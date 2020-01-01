import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Object;

  constructor(private loginService:AuthenticationService){ }
  ngOnInit() {
     }

    //onLogoutClick(){
     // this.authService.logout();
     // this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000 });
     // this.router.navigate(['/login']);
     // return false;
 // }

}
