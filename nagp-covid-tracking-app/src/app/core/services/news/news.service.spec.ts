import { TestBed, inject } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { INewsDetail } from 'src/app/shared/interfaces/INewsDetail';

describe('NewsService', () => {
  let service: NewsService;
  beforeEach(() => { TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [NewsService]
  });
  service=TestBed.get(NewsService);
 });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getNewsDetails function', () => {
    expect(service.getNewsDetails()).toBeTruthy();
   });

   it('should have addNews function', () => {
    const news: INewsDetail = {
          
        id: 1,
        title : "Covid-19 diagnosis",
        description : "India shifts focus back to RT-PCR test",
        summary : "Senior government officials told ET that the Indian Council of Medical Research (ICMR) would not place fresh orders for antibody rapid test kits.",
        fullNews : "Senior government officials told ET that the Indian Council of Medical Research (ICMR) would not place fresh orders for antibody rapid test kits. Instead, it has asked manufacturers of RT-PCR (reverse transcription polymerase chain reaction) kits to ramp up production.",
    }
    expect(service.addNews(news)).toBeTruthy();
   });

});


