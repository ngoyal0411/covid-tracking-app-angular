import { Component, OnInit } from '@angular/core';
import { IDistrictCovidReport } from 'src/app/shared/interfaces/IDistrictCovidReport';
import { DistrictDetailService } from 'src/app/core/services/districtdetail/district.detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IDistrictWiseDetail } from 'src/app/shared/interfaces/IDistrictWiseDetail';
import { IDistrictData } from 'src/app/shared/interfaces/IDistrictData';
import { element } from 'protractor';
import { Route } from '@angular/compiler/src/core';

@Component({
  templateUrl: './districts-detail.component.html',
  styleUrls: ['./districts-detail.component.scss']
})

/** District Detail component class. */
export class DistrictsDetailComponent implements OnInit {
 
  districtDetail:IDistrictCovidReport;
  districtWiseDetail:Array<IDistrictData>;
  displayedColumns = ['district', 'confirmed', 'active', 'recovered','death'];

  
  // object: {[key: string]: IDistrictWiseDetail} = {'Assam': {notes:""}, 'Hello': {notes:"hello"}};
  // map = new Map([[2, 'foo'], [1, 'bar']]);

  constructor(private districtDetailService:DistrictDetailService, 
    private route: ActivatedRoute,private router:Router) {
      console.log("DistrictsDetailComponent");
  }

  ngOnInit() {
    let stateName = this.route.snapshot.paramMap.get('district');
    console.log(stateName);
    try{
      this.getDistrictCovidDetail(stateName);
    }
    catch{
     
    }
    
  }
  
  async getDistrictCovidDetail(stateName:string) {
    this.districtDetailService.getDistrictDetail().subscribe(response=>{
      console.log(response);
      this.districtDetail=response;
      this.districtWiseDetail=response[stateName]?.districtData;
      if(this.districtWiseDetail==undefined){
        console.log("Not Valid State!");
        this.router.navigateByUrl('pagenotfound');
      }
      
      // if(this.districtDetail!=undefined){
      //   this.districtWiseDetail=response[stateName].districtData;
       
      //   let array=this.districtWiseDetail.map(item=>{
      //     console.log(item);
      //     return{
      //       $key:item.key,
      //       ...item.payload
      //     };
      //   })

    });
  }
}
