import { Component, OnInit } from '@angular/core';
import { INewsDetail } from 'src/app/shared/interfaces/INewsDetail';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-add-latest-news',
  templateUrl: './add-latest-news.component.html',
  styleUrls: ['./add-latest-news.component.scss']
})
export class AddLatestNewsComponent implements OnInit {
  latestNews: INewsDetail;
  newsForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router,
    private newsService: NewsService, private toastrService: ToastrService) {
    console.log("Add News component loaded");
   }

   ngOnInit() {
    this.newsForm = this.fb.group({
        title: ["", [Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
         desc: ["", Validators.required],
        summary: [{ value: "", disabled: false }, Validators.required],
        fullNews: [{ value: "", disabled: false }, Validators.required]
    });
}

saveNews(currentNews: INewsDetail) {
  this.newsService.addNews(currentNews).subscribe(data=>{

  });
  this.router.navigateByUrl('dashboard/news');
this.newsService.getNewsDetails().subscribe(data=>{
  console.log(data);
});

  this.toastrService.success('News added successfully!', 'Covid Tracking App');
  
  
}

}
