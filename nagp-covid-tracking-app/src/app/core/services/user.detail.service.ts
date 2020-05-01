import { Injectable } from '@angular/core';
import { IUserDetail } from '../../shared/interfaces/IUserDetail';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private apiURL = "api/userDetail";

  constructor(private http: HttpClient) { }

  /** GET ALL user detail. */
  getUserDetails(): Observable<IUserDetail[]> {
    return this.http.get<IUserDetail[]>(this.apiURL);
  }

  addUser(newUser: IUserDetail): Observable<IUserDetail> {
    return this.http.post<IUserDetail>(this.apiURL, newUser, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getUserDetailById(id: number): IUserDetail {
    return null;
  }



  deleteUser(id: number) {
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
