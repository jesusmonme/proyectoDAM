import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortearEquiposComponent } from './sortear-equipos.component';

describe('SortearEquiposComponent', () => {
  let component: SortearEquiposComponent;
  let fixture: ComponentFixture<SortearEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortearEquiposComponent]
    });
    fixture = TestBed.createComponent(SortearEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
