import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CrearModificarInscripcionComponent,
} from './crear-modificar-inscripcion/crear-modificar-inscripcion.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';

const routes: Routes = [
  {
    path: 'inscripciones',
    component: InscripcionesComponent,
  },
  {
    path: 'inscripciones/crear',
    component: CrearModificarInscripcionComponent,
  },
  {
    path: 'inscripciones/modificar/:id_inscripcion',
    component: CrearModificarInscripcionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicoRoutingModule { }
