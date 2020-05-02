import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IStateCovidReport } from 'src/app/shared/interfaces/IStateCovidReport';
import { StatesDetailService } from 'src/app/core/services/states.detail.service';
import { IStateWiseDetail } from 'src/app/shared/interfaces/IStateWiseDetail';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './states-detail.component.html',
  styleUrls: ['./states-detail.component.scss']
})

/** States Detail component class. */
export class StatesDetailComponent implements OnInit {
 
  stateWiseList:IStateWiseDetail[];
  displayedColumns = ['state', 'confirmed', 'active', 'recovered','death'];
 
  constructor(private statesDetailService:StatesDetailService, 
    private route: Router) {
  }

  ngOnInit() {
    this.getStatesCovidReport();
    
  }

  async getStatesCovidReport() {
    this.statesDetailService.getStatesReport().subscribe(response=>{
      console.log(response);
      this.stateWiseList=response.statewise.sort(function(a, b) {
        var stateA = a.state.toUpperCase();
        var stateB = b.state.toUpperCase();
        return (stateA < stateB) ? -1 : (stateA > stateB) ? 1 : 0;
    });
    })
      
  }

  public stateClick( value: any ) : void {

    this.route.navigate(['/districts']);

	}


}
// export interface Element {
//   name: string;
//   position: number;
//   total: number;
//   symbol: string;
// }
// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: "Hydrogen", total: 1.0079, symbol: "H"},
//   {position: 2, name: "Helium", total: 4.0026, symbol: "He"},
//   {position: 3, name: "Lithium", total: 6.941, symbol: "Li"},
// ];
