import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { IDistrictCovidReport } from 'src/app/shared/interfaces/IDistrictCovidReport';
import { AppConstants } from 'src/app/shared/appconstants/app.constants';

@Injectable({
    providedIn: 'root'
})
export class DistrictDetailService{
    private apiURL = AppConstants.districtWiseJsonUrl;

    constructor(private http: HttpClient) { 
      console.log("District Detail Service");
    }

      getDistrictDetail():Observable<IDistrictCovidReport>{
        return this.http.get<IDistrictCovidReport>(this.apiURL);

      }
} 