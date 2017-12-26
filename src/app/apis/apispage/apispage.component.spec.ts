import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApispageComponent } from './apispage.component';

describe('ApispageComponent', () => {
  let component: ApispageComponent;
  let fixture: ComponentFixture<ApispageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApispageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApispageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
