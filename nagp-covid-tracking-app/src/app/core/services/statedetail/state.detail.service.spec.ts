import { TestBed, inject } from '@angular/core/testing';
import { StatesDetailService } from './states.detail.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppConstants } from 'src/app/shared/appconstants/app.constants';

describe('StatesDetailService', () => {
  let service: StatesDetailService;
  beforeEach(() => { TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [StatesDetailService]
  });
  service=TestBed.get(StatesDetailService);
 });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getStatesReport function', () => {
    expect(service.getStatesReport()).toBeTruthy();
   });

  it('expects service to fetch state wise data',
  inject([HttpTestingController, StatesDetailService],
    (httpMock: HttpTestingController, service: StatesDetailService) => {
      // We call the service
      service.getStatesReport().subscribe(data => {
        expect(data.statewise).toBeDefined();
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne(AppConstants.stateWiseJsonUrl);
      expect(req.request.method).toEqual('GET');
    
    })
); 

});


