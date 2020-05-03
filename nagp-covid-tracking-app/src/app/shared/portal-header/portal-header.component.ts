import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppConstants} from '../appconstants/app.constants';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.scss']
})
export class PortalHeaderComponent {
  pageTitle = AppConstants.appTitle;
  constructor(private route: Router) { }
 

  navigateToAdmin(){
    this.route.navigate(['/admin']);
  }

}
