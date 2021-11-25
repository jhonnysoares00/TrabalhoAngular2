import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineloComponent } from './chinelo.component';

describe('ChineloComponent', () => {
  let component: ChineloComponent;
  let fixture: ComponentFixture<ChineloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChineloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
