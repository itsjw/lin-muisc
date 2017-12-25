import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTitleComponent } from './bottom-title.component';

describe('BottomTitleComponent', () => {
  let component: BottomTitleComponent;
  let fixture: ComponentFixture<BottomTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
