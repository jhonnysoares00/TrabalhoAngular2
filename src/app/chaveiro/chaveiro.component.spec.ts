import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveiroComponent } from './chaveiro.component';

describe('ChaveiroComponent', () => {
  let component: ChaveiroComponent;
  let fixture: ComponentFixture<ChaveiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaveiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaveiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
