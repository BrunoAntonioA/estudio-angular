import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioRxjsComponent } from './estudio-rxjs.component';

describe('EstudioRxjsComponent', () => {
  let component: EstudioRxjsComponent;
  let fixture: ComponentFixture<EstudioRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
