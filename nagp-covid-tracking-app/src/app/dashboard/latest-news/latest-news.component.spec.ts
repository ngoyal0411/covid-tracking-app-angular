import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LatestNewsComponent } from './latest-news.component';
import { NewsService } from 'src/app/core/services/news/news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { INewsDetail } from 'src/app/shared/interfaces/INewsDetail';
import { of } from 'rxjs';

let newsDetail: INewsDetail[] = [
  {
    id: 0,
    title: 'test',
    description: 'test',
    summary: 'test',
    fullNews: 'test',
  },
];

describe('LatestNewsComponent', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;
  let newsService: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LatestNewsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    newsService = TestBed.get(NewsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call getNewsDetails on ngOnInIt.', () => {
    spyOn(newsService, 'getNewsDetails').and.returnValue(of(newsDetail));
    component.ngOnInit();
    expect(newsService.getNewsDetails).toHaveBeenCalled();
  });
});
