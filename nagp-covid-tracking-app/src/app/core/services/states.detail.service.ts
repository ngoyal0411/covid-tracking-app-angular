import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { IStateCovidReport } from 'src/app/shared/interfaces/IStateCovidReport';

@Injectable({
    providedIn: 'root'
})
export class StatesDetailService{
    private apiURL = "https://api.covid19india.org/data.json";

    constructor(private http: HttpClient) { 
      console.log("State Detail Service");
    }

      getStatesReport():Observable<IStateCovidReport>{
        return this.http.get<IStateCovidReport>(this.apiURL);

      }
} 