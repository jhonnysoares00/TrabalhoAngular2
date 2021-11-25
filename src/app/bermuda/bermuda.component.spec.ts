import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BermudaComponent } from './bermuda.component';

describe('BermudaComponent', () => {
  let component: BermudaComponent;
  let fixture: ComponentFixture<BermudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BermudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BermudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
