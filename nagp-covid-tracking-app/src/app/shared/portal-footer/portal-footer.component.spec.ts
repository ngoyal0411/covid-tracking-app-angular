import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFooterComponent } from './portal-footer.component';
import { SharedMaterialModule } from '../shared-material.module';
import { AppConstants } from '../appconstants/app.constants';

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

});

