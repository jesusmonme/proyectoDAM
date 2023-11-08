import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPenyaComponent } from './formulario-penya.component';

describe('FormularioPenyaComponent', () => {
  let component: FormularioPenyaComponent;
  let fixture: ComponentFixture<FormularioPenyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPenyaComponent]
    });
    fixture = TestBed.createComponent(FormularioPenyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
