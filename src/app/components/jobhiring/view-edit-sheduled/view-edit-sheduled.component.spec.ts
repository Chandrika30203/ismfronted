import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditSheduledComponent } from './view-edit-sheduled.component';

describe('ViewEditSheduledComponent', () => {
  let component: ViewEditSheduledComponent;
  let fixture: ComponentFixture<ViewEditSheduledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditSheduledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditSheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
