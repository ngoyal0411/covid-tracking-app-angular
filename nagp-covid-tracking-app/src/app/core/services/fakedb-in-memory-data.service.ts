import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INewsDetail } from '../../shared/interfaces/INewsDetail';
import { IUser } from 'src/app/shared/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class InMemoryFakeDBDataService implements InMemoryDbService {
    createDb() {
  
      /** Default User data collection. */
      const users:IUser[]= [{
        id: 1,
        username: "nishu",
        password: "nishu"
      } 
     ];

      /** Default News Collection */
      const news: INewsDetail[] = [{
          
        id: 1,
        title : "Covid-19 diagnosis",
        description : "India shifts focus back to RT-PCR test",
        summary : "Senior government officials told ET that the Indian Council of Medical Research (ICMR) would not place fresh orders for antibody rapid test kits.",
        fullNews : "Senior government officials told ET that the Indian Council of Medical Research (ICMR) would not place fresh orders for antibody rapid test kits. Instead, it has asked manufacturers of RT-PCR (reverse transcription polymerase chain reaction) kits to ramp up production.",
    },
    {
      id:2,
      title:"No Privacy Concerns",
      description:"Union Minister On Aarogya Setu App",
      summary:"He was responding to AIMIM MP Asaduddin Owaisi's remark on the possibility of private information being collected by the app.",
      fullNews:"New Delhi: Union Minister Prakash Javadekar on Saturday said that Aarogya Setu app is one of the best scientific means to alert people if some COVID-19 infected person is nearby, adding that there should be no concern over privacy-related issues. He was responding to AIMIM MP Asaduddin Owaisi's remark on the possibility of private information being collected by the app. Mr Javadekar said the app is being preferred worldwide over other means of tracking and mapping the pandemic. \n It alerts people if some COVID-19 infected person is near them. This is one of the best scientific means. There is no privacy-related issue here, he told ANI."
    }
  ];
  
      return {news,users};
    }
  
  /** Method that generates the ids of news when not passed. */
    genId(newsDetail: INewsDetail[]): number {
      return newsDetail.length > 0 ? Math.max(...newsDetail.map(news => news.id)) + 1 : 1;
    }
  }
  