import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
