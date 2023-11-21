import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPenyaComponent } from './editar-penya.component';

describe('EditarPenyaComponent', () => {
  let component: EditarPenyaComponent;
  let fixture: ComponentFixture<EditarPenyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPenyaComponent]
    });
    fixture = TestBed.createComponent(EditarPenyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
