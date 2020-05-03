import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLoginComponent } from './admin-login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppConstants } from 'src/app/shared/appconstants/app.constants';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;
  let loginService: LoginService;
  let toastrService: ToastrService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule,
      ],
      providers: [
        FormBuilder,
        { provide: ToastrService, useValue: toastrService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);
    toastrService = TestBed.get(ToastrService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should navigate (to addnews) on ngOnInIt.', () => {
    localStorage.setItem('TOKEN', AppConstants.authToken);
    const spy = spyOn(router, 'navigateByUrl');
    component.ngOnInit();
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).toBe('admin/addnews');
    expect(spy).toHaveBeenCalled();
  });

  it('should not navigate (to addnews) on ngOnInIt.', () => {
    localStorage.setItem('TOKEN', '');
    const spy = spyOn(router, 'navigateByUrl');
    component.ngOnInit();
    expect(spy).not.toHaveBeenCalled();
  });
});
