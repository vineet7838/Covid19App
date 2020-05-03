import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/login.service';


@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css']
})
export class PortalHeaderComponent implements OnInit {

  
  // variable to check user is logged in or not.
 isLoggedIn = false;

  //title of the application
  pageTitle = "Covid Portal";

  // variable that holds user name.
  username = '';
  constructor(private route: Router,private toastrService:ToastrService,private sharedService: LoginService) { }

  /**
   * sets the user name on the header.
   */
  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
    if (localStorage.getItem('TOKEN') !== null) {
      this.username = 'Log out ' + localStorage.getItem('username');
      this.isLoggedIn = true;
    }
  }

  /**
   * Method that logout the user from the portal.
   */
  logout() {
    localStorage.clear();
    this.isLoggedIn=false;
    this.changeIsLoggedInStatus();
    this.toastrService.success('Logged Out successfully!', 'Covid Portal');
    this.route.navigate(['/dashboard']);
  }

  login(){
    this.route.navigate(['/login']);
  }

  changeIsLoggedInStatus() {
    this.sharedService.changeIsLoggedInStatus(this.isLoggedIn);

  }

}
