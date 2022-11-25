import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicoRoutingModule } from './academico-routing.module';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { NbCardModule } from '@nebular/theme';
import {
  CrearModificarInscripcionComponent,
} from './crear-modificar-inscripcion/crear-modificar-inscripcion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InscripcionesComponent,
    CrearModificarInscripcionComponent,
  ],
  imports: [
    CommonModule,
    AcademicoRoutingModule,
    NbCardModule,
    FormsModule,
  ],
})
export class AcademicoModule { }
