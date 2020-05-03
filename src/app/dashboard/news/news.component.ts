import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { News } from 'src/app/shared/class/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  allnews:News[];

  constructor( private router: Router,private newsService:NewsService ) { }

  ngOnInit(): void {

    this.listAllNews();
  }
  listAllNews() {
    this.newsService.getNewsDetails().subscribe(data => {
            this.allnews = data;

    });
  }
  
}
