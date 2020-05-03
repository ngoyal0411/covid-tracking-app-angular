import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DistrictsDetailComponent } from './districts-detail.component';
import { DistrictDetailService } from 'src/app/core/services/districtdetail/district.detail.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IDistrictCovidReport } from 'src/app/shared/interfaces/IDistrictCovidReport';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

let DistrictCovidReport: IDistrictCovidReport = {};

describe('DistrictsDetailComponent', () => {
  let component: DistrictsDetailComponent;
  let fixture: ComponentFixture<DistrictsDetailComponent>;
  let districtDetailService: DistrictDetailService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictsDetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsDetailComponent);
    component = fixture.componentInstance;
    districtDetailService = TestBed.get(DistrictDetailService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should navigate (to pagenotfound) on ngOnInIt.', () => {
    spyOn(districtDetailService, 'getDistrictDetail').and.returnValue(
      of(DistrictCovidReport)
    );
    const spy = spyOn(router, 'navigateByUrl');
    component.ngOnInit();
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).toBe('pagenotfound');
    expect(spy).toHaveBeenCalled();
  });
});
