import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloObservableComponent } from './ciclo-observable.component';

describe('CicloObservableComponent', () => {
  let component: CicloObservableComponent;
  let fixture: ComponentFixture<CicloObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
