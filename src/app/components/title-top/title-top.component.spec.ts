import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTopComponent } from './title-top.component';

describe('TitleTopComponent', () => {
  let component: TitleTopComponent;
  let fixture: ComponentFixture<TitleTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
