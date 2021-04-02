import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRxjsComponent } from './inicio-rxjs.component';

describe('InicioRxjsComponent', () => {
  let component: InicioRxjsComponent;
  let fixture: ComponentFixture<InicioRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
