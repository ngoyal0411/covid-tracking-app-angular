import { Injectable } from '@angular/core';
import { IUser } from '../../../shared/interfaces/IUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService {

  private loginData: IUser[];

  private apiURL = "api/users";

    constructor(private http: HttpClient) { 
     this. getUserDetails();
      console.log("Login Service");
    }

     /* GET ALL latest news detail. */
  getUserDetails() {
    return this.http.get<IUser[]>(this.apiURL).subscribe((data)=>{
      this.loginData=data
    });     
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }
}
