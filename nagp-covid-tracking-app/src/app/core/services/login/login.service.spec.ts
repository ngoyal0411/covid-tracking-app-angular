import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/IUser';

const testUserData: IUser = {
  id: 1,
  username: 'Nishu',
  password: 'Password',
};

const testLoginData: IUser[] = [{
    id: 1,
    username: 'Nishu',
    password: 'Password',
  }];

describe('LoginService', () => {
  let testPayload: any;
  let httpClientSpy: jasmine.Spy;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });

    let httpClient = TestBed.get(HttpClient);
    loginService = TestBed.get(LoginService);

    httpClientSpy = spyOn(httpClient, 'get');

    httpClientSpy.and.callFake((getUrl: string, options: any) => {
      return of(testLoginData);
    });
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  it('service should return expected values', () => {
    loginService.getUserDetails();
    let result = loginService.validateUser(testUserData);
    expect(result).toEqual(true);
  });
});
