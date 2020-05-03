import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PrecautionsComponent } from './precautions.component';
import { DebugElement } from '@angular/core';

describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should navigate (to pagenotfound) on ngOnInIt.', () => {
    let matCardTitle = fixture.nativeElement.querySelector('mat-card-title');
    expect(matCardTitle.innerText).toEqual('Precautions');
  });
});
