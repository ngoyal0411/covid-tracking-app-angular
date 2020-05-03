import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFooterComponent } from './portal-footer.component';
import { SharedMaterialModule } from '../shared-material.module';

describe('PortalFooterComponent', () => {
  let component: PortalFooterComponent;
  let fixture: ComponentFixture<PortalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedMaterialModule ],
      declarations: [ PortalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should contain nishu in the footer toolbar', () => {
    const footerText = "Nishu Goel";
    const component = fixture.debugElement.componentInstance;
    expect(component.name).toContain(footerText);
  });

  it('should render nishu in paragraph tag with name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.name').textContent).toContain(component.name);
  });

  it('should render created by text in paragraph tag create-by', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.create-by').textContent).toContain("Created by:");
  });

  

});

