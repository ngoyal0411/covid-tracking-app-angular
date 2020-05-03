import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StatesDetailComponent } from './states-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { IStateCovidReport } from 'src/app/shared/interfaces/IStateCovidReport';
import { StatesDetailService } from 'src/app/core/services/statedetail/states.detail.service';

let StateCovidReport: IStateCovidReport = {
    cases_time_series: null,
    statewise: [{
      active: 'test',
    confirmed: 'test',
    deaths: 'test',
    deltaconfirmed:'test',
    deltadeaths:'test',
    deltarecovered: 'test',
    lastupdatedtime: 'test',
    recovered: 'test',
    state: 'test',
    statecode:'test',
    statenotes: 'test',
    }],
    tested: null
};

describe('StatesDetailComponent', () => {
  let component: StatesDetailComponent;
  let fixture: ComponentFixture<StatesDetailComponent>;
  let statesDetailService: StatesDetailService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatesDetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesDetailComponent);
    component = fixture.componentInstance;
    statesDetailService = TestBed.get(StatesDetailService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call getStatesReport on ngOnInIt.', () => {
    spyOn(statesDetailService, 'getStatesReport').and.returnValue(
      of(StateCovidReport)
    );
    component.ngOnInit();
    expect(statesDetailService.getStatesReport).toHaveBeenCalled();
  });
});
