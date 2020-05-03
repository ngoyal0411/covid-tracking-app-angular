import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
