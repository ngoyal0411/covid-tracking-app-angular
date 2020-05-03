import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { IStateCovidReport } from 'src/app/shared/interfaces/IStateCovidReport';
import { AppConstants } from 'src/app/shared/appconstants/app.constants';

@Injectable({
    providedIn: 'root'
})
export class StatesDetailService{
    private apiURL = AppConstants.stateWiseJsonUrl;

    constructor(private http: HttpClient) { 
      console.log("State Detail Service");
    }

      getStatesReport():Observable<IStateCovidReport>{
        return this.http.get<IStateCovidReport>(this.apiURL);
      }
} 