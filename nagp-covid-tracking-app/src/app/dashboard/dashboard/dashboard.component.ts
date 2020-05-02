import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/** Dashboard component class. */
export class DashboardComponent implements OnInit {

  navLinks = [
    {label: 'Dashboard', path:''},
    {label: 'Latest News', path:'news'},
    {label: 'Precautions', path:'precautions'}
  ];
  constructor() {
}
  ngOnInit() {
  }
}
