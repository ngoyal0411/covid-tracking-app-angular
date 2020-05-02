import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { IDistrictCovidReport } from 'src/app/shared/interfaces/IDistrictCovidReport';

@Injectable({
    providedIn: 'root'
})
export class DistrictDetailService{
    private apiURL = "https://api.covid19india.org/state_district_wise.json";

    constructor(private http: HttpClient) { 
      console.log("District Detail Service");
    }

      getDistrictDetail():Observable<IDistrictCovidReport>{
        return this.http.get<IDistrictCovidReport>(this.apiURL);

      }
} 