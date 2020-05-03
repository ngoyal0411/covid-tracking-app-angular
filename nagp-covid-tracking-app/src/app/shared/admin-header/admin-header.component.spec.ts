import { async, ComponentFixture, TestBed, fakeAsync, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedMaterialModule } from '../shared-material.module';

import { AdminHeaderComponent } from './admin-header.component';
import { routes } from '../../core/approuting/app-routing.module';
import { AppConstants } from '../appconstants/app.constants';
import { By } from 'protractor';
import { Router } from '@angular/router';

describe('AdminHeaderComponent', () => {
  let component: AdminHeaderComponent;
  let fixture: ComponentFixture<AdminHeaderComponent>;
  let mockRouter;

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [ AdminHeaderComponent ],
      imports: [RouterTestingModule.withRoutes(routes),
        SharedMaterialModule],
        providers:[
          { provide: Router, useValue: mockRouter},
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Covid Tracking App'`, () => {
    const component = fixture.debugElement.componentInstance;
    expect(component.pageTitle).toEqual(AppConstants.appTitle);
  });

  it('should navigate to Dashboard when on navigateToDashboard', () => {
        component.navigateToDashboard();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);  
  });

  it('should logout from application and navigate to login page', () => {
        component.logout();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/admin']);  
      });
  
 });
