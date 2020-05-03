import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goBack(): void {
   
      this.route.navigate(['/dashboard']);
    
  }
}
