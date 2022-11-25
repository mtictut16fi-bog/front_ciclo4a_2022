import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarInscripcionComponent } from './crear-modificar-inscripcion.component';

describe('CrearModificarInscripcionComponent', () => {
  let component: CrearModificarInscripcionComponent;
  let fixture: ComponentFixture<CrearModificarInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearModificarInscripcionComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearModificarInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
