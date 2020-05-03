import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PortalFooterComponent } from './shared/portal-footer/portal-footer.component';
import { SharedMaterialModule } from './shared/shared-material.module';
import { MatToolbar } from '@angular/material/toolbar';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,PortalFooterComponent,MatToolbar
      ],
      imports:[RouterTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
