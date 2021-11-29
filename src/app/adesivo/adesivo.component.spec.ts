import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdesivoComponent } from './adesivo.component';

describe('AdesivoComponent', () => {
  let component: AdesivoComponent;
  let fixture: ComponentFixture<AdesivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdesivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdesivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
