import { Component, OnInit } from '@angular/core';
import { News } from '../../shared/class/News';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from 'src/app/core/services/news.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  pageTitle: string = "Add the news details";
    news: News = new News();
    newsForm: FormGroup;
    previewfile:File;
    imagePreview: string;

    constructor(public fb: FormBuilder,private newsService: NewsService,private toastrService:ToastrService,
      private router:Router) { }

    ngOnInit() {
        this.newsForm = this.fb.group({
            title: ["", [Validators.required, Validators.minLength(5)]],
            description: ["", [Validators.required,Validators.minLength(10)]],
            summary: [{ value: "", disabled: false }, [Validators.required,Validators.minLength(10)]],
            details: ["", [Validators.minLength(15),Validators.required]],
            fileImage:[""],
            newsDate: ["",],
        
          });
    }

    save(newNews:News) {

      newNews.image=this.imagePreview;
      newNews.newsDate=new Date();
      
      this.newsService.addNews(newNews).subscribe();
      this.toastrService.success('News Posted successfully!', 'Covid Portal');
      this.router.navigate(['/dashboard/news']);

    }


    onFileUpload(event){
      console.log("file upload event trigger")
       this.previewfile = event.target.files[0];
       const reader = new FileReader();
        reader.onload = () => {
      this.imagePreview = reader.result as string;
      };
    reader.readAsDataURL(this.previewfile);

      }
}
