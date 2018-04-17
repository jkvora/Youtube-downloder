import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlbarComponent } from './urlbar.component';

describe('UrlbarComponent', () => {
  let component: UrlbarComponent;
  let fixture: ComponentFixture<UrlbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
