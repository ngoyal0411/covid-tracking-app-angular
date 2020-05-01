import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  templateUrl: './states-detail.component.html',
  styleUrls: ['./states-detail.component.scss']
})

/** States Detail component class. */
export class StatesDetailComponent implements OnInit {
  dataSource= ELEMENT_DATA;
  /** Constructor that injects router. */
  constructor(private route: Router) {
}
  ngOnInit() {
  }

  public stateClick( value: any ) : void {

    this.route.navigate(['/districts']);

	}


}
export interface Element {
  name: string;
  position: number;
  total: number;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: "Hydrogen", total: 1.0079, symbol: "H"},
  {position: 2, name: "Helium", total: 4.0026, symbol: "He"},
  {position: 3, name: "Lithium", total: 6.941, symbol: "Li"},
];
