import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioViewChildComponent } from './estudio-view-child.component';

describe('EstudioViewChildComponent', () => {
  let component: EstudioViewChildComponent;
  let fixture: ComponentFixture<EstudioViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
