import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppConstants} from '../appconstants/app.constants';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  // variable to check user is logged in or not.
  isLoggedIn = false;

  //title of the application
  pageTitle = AppConstants.appTitle;

  // variable that holds user name.
  username = '';
  constructor(private route: Router) { }

  /**
   * sets the user name on the header.
   */
  ngOnInit() {
    if (localStorage.getItem('TOKEN') !== null) {
      this.username = 'Log out ' + localStorage.getItem('username');
      this.isLoggedIn = true;
    }
  }

  /**
   * Method that logout the user from the portal.
   */
  logout() {
    localStorage.clear();
    this.route.navigate(['/admin']);
  }

  navigateToDashboard(){
    this.route.navigate(['/dashboard']);
  }

}
