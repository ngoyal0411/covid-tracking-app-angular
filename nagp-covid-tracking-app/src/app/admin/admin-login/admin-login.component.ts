import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../core/services/login.service';
import { IUser } from '../../shared/interfaces/IUser';
import { ToastrService } from 'ngx-toastr';
import {AppConstants} from '../../shared/appconstants/app.constants';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  // variable of login form.
  loginForm: FormGroup;

  /**
   *
   * @param fb : FormBuilder
   * @param route : Router
   * @param loginService : LoginService
   */
  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService,
              private toastrService: ToastrService ) {

    /**
     * Login form initialized with default values.
     */
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  /**
   * This method returns the error messages.
   */
  getErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? AppConstants.requiredFieldErrorMessage :
        this.loginForm.get('password').hasError('required') ? AppConstants.requiredFieldErrorMessage :
            '';
  }

  /** Clears the local storage initially */
  ngOnInit() {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
  }

  /**
   * Login the user and redirect to dashboard when valid.
   * @param myform : IUser
   */
  login(myform: IUser) {
    if (this.loginService.validateUser(myform)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('username', myform.username);
      this.route.navigate(['/dashboard']);
      this.toastrService.success('Logged in successfully!', AppConstants.appTitle);
    } else {
      this.toastrService.warning(AppConstants.toastWarningMessage, AppConstants.appTitle);
    }

  }

  /**
   * resets the login form.
   */
  resetForm() {
    this.loginForm.reset();
  }

}
