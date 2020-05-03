import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news/news.service';
import { INewsDetail } from 'src/app/shared/interfaces/INewsDetail';

@Component({
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})



/** Latest News component class. */
export class LatestNewsComponent implements OnInit {

  latestNews:INewsDetail[];

  constructor(private newsService: NewsService) {
}

  ngOnInit() {
    this.listLatestNews();
  }

  listLatestNews() {
    this.newsService.getNewsDetails().subscribe(data => {
      this.latestNews=data;
    });
   
  }
}
