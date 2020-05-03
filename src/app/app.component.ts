import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CovidPortal';
  /**
   *
   * @param route : Router
   */
  constructor(private route: Router) { }

  ngOnInit() {
  }

  login(){
    this.route.navigate(['/login']);
  }
}
