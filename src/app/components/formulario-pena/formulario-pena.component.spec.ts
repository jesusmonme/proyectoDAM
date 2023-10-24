import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPenaComponent } from './formulario-pena.component';

describe('FormularioPenaComponent', () => {
  let component: FormularioPenaComponent;
  let fixture: ComponentFixture<FormularioPenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPenaComponent]
    });
    fixture = TestBed.createComponent(FormularioPenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
