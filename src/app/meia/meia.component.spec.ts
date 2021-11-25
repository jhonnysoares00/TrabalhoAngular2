import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeiaComponent } from './meia.component';

describe('MeiaComponent', () => {
  let component: MeiaComponent;
  let fixture: ComponentFixture<MeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
