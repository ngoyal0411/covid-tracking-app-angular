import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PortalHeaderComponent } from '../../portal-header/portal-header.component';
import { Router } from '@angular/router';

describe('PortalFooterComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let mockRouter;

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ PageNotFoundComponent, PortalHeaderComponent],
      providers:[
        { provide: Router, useValue: mockRouter},
      ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should contain page not found as heading', () => {
    const pageNotFoundText = "Page not found :(";
    expect(fixture.nativeElement.querySelector('.jumbotron >h1').textContent).toContain(pageNotFoundText);
  });

  it('should navigate to home Page on goBackToHomePage.', () => {
        component.goBack();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);  
      });

});

