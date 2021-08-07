import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobhiringComponent } from './jobhiring.component';

describe('JobhiringComponent', () => {
  let component: JobhiringComponent;
  let fixture: ComponentFixture<JobhiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobhiringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobhiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
