import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserDetail } from 'src/app/shared/interfaces/IUserDetail';

@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService {

  /** Array of login user data. */
  private loginData: IUser[];

  private apiURL = "api/users";

    constructor(private http: HttpClient) { 
     this. getNewsDetails();
      console.log("Login Service");
    }

     /* GET ALL latest news detail. */
  getNewsDetails() {
    return this.http.get<IUser[]>(this.apiURL).subscribe((data)=>{
      this.loginData=data
    });     
  }


  /** Method to get all login user data. */
  getUsers(): IUser[] {
    // this.loginData = [{
    //   "id": 1,
    //   "username": "nishu",
    //   "password": "nishu"
    // }, {
    //   "id": 2,
    //   "username": "admin",
    //   "password": "admin"
    // }];

    return this.loginData;
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
