import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedMaterialModule } from '../shared-material.module';

import { PortalHeaderComponent } from './portal-header.component';
import { routes } from '../../core/approuting/app-routing.module';
import { AppConstants } from '../appconstants/app.constants';

describe('PortalHeaderComponent', () => {
  let component: PortalHeaderComponent;
  let fixture: ComponentFixture<PortalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
        SharedMaterialModule],
      declarations: [ PortalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalHeaderComponent);
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

  it('should render title in h1 tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(AppConstants.appTitle);
  });

 });
