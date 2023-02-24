import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSWriteAngAppComponent } from './rx-jswrite-ang-app.component';

describe('RxJSWriteAngAppComponent', () => {
  let component: RxJSWriteAngAppComponent;
  let fixture: ComponentFixture<RxJSWriteAngAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJSWriteAngAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJSWriteAngAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
