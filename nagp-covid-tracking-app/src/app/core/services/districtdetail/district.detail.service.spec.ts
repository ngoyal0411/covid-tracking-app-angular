import { TestBed, inject } from '@angular/core/testing';
import { DistrictDetailService } from './district.detail.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppConstants } from 'src/app/shared/appconstants/app.constants';

describe('StatesDetailService', () => {
  let service: DistrictDetailService;
  beforeEach(() => { TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DistrictDetailService]
  });
  service=TestBed.get(DistrictDetailService);
 });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getDistrictDetail function', () => {
    expect(service.getDistrictDetail()).toBeTruthy();
   });

  it('expects service to fetch district wise data',
  inject([HttpTestingController, DistrictDetailService],
    (httpMock: HttpTestingController, service: DistrictDetailService) => {
      // We call the service
      service.getDistrictDetail().subscribe(data => {
        expect(data).toBeDefined();
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne(AppConstants.districtWiseJsonUrl);
      expect(req.request.method).toEqual('GET');
    
    })
); 

});


