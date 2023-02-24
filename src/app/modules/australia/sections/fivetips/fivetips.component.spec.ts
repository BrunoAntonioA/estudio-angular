import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivetipsComponent } from './fivetips.component';

describe('FivetipsComponent', () => {
  let component: FivetipsComponent;
  let fixture: ComponentFixture<FivetipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivetipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivetipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
