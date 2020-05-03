import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLatestNewsComponent } from './add-latest-news.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from 'src/app/core/services/news/news.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from 'protractor';

describe('AddLatestNewsComponent', () => {
  let component: AddLatestNewsComponent;
  let fixture: ComponentFixture<AddLatestNewsComponent>;
  let toastrService: ToastrService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLatestNewsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule 
      ],
      providers: [ FormBuilder,NewsService,
        {provide:ToastrService,useValue:toastrService}],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form using formbuilder', () => {
    expect(component.newsForm instanceof FormGroup).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.newsForm.controls['title'].setValue('');
    component.newsForm.controls['desc'].setValue('');
    component.newsForm.controls['summary'].setValue('');
    component.newsForm.controls['fullNews'].setValue('');
    expect(component.newsForm.valid).toBeFalsy(); 
  }));

});
