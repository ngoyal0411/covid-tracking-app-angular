import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AddNewsCanActivateGuard implements CanActivate {
  constructor(private router: Router, private toastrService: ToastrService) {}
  canActivate(): boolean {
    if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.router.navigate(['/admin']);
      this.toastrService.warning('Please login to add news!', 'Covid Tracking App');
      return false;
    }
    return true;
  }
  
}
