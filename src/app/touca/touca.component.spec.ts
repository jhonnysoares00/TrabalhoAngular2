import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToucaComponent } from './touca.component';

describe('ToucaComponent', () => {
  let component: ToucaComponent;
  let fixture: ComponentFixture<ToucaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToucaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
