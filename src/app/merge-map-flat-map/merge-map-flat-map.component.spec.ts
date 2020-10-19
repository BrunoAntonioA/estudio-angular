import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapFlatMapComponent } from './merge-map-flat-map.component';

describe('MergeMapFlatMapComponent', () => {
  let component: MergeMapFlatMapComponent;
  let fixture: ComponentFixture<MergeMapFlatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapFlatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapFlatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
