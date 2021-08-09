import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelnavComponent } from './panelnav.component';

describe('PanelnavComponent', () => {
  let component: PanelnavComponent;
  let fixture: ComponentFixture<PanelnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
