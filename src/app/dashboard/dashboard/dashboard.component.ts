import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false;
  
  constructor( private router: Router, private sharedService: LoginService) { 
    console.log("Dashboard Component in constructor");
    
  }
  
  
  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
    if(localStorage.getItem('TOKEN')){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }

    this.changeIsLoggedInStatus();
    console.log("Dashboard Component in Oninit");
    
    
  }

  changeIsLoggedInStatus() {
    this.sharedService.changeIsLoggedInStatus(this.isLoggedIn);

  }

}
