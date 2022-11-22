import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicoRoutingModule } from './academico-routing.module';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    AcademicoRoutingModule,
    NbCardModule,
  ]
})
export class AcademicoModule { }
