import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Inscripcion } from '../../../modelos/inscripcion.model';
import { InscripcionService } from '../../../servicios/inscripcion.service';

@Component({
  selector: 'ngx-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss'],
})
export class InscripcionesComponent implements OnInit {
  a$os: string[] = [];
  inscripciones: Inscripcion[];
  nombresColumnas: String[] = ['Año', 'Semestre', 'Estudiante', 'Materia', 'Nota Final', 'Opciones'];

  constructor(private miServicioInscripcion: InscripcionService, private router: Router) {
    console.debug('Constructor componente Inscripciones');
  }

  ngOnInit(): void {
    console.debug('onInit componente Inscripciones');
    this.listar();
  }

  listar(): void {
    this.miServicioInscripcion.listar().subscribe(
      data => {
                this.inscripciones = data;
                for (let i = 0; i < this.inscripciones.length; i++) {
                  this.inscripciones[i].estudiante = data[i].estudiante['nombre'] + ' ' +
                                                     data[i].estudiante['apellido'];
                  this.inscripciones[i].materia = data[i].materia['nombre'];
                  this.a$os[i] = this.inscripciones[i].año;
                }
                console.debug(this.inscripciones);
                console.debug(this.a$os);
              });
  }

  agregar(): void {
    console.log('agregando nueva Inscripción');
    this.router.navigate(['pages/academico/inscripciones/crear']);
  }

  editar(id: string): void {
    console.log('editando Inscripción ' + id);
    this.router.navigate(['pages/academico/inscripciones/modificar/' + id]);
  }

  eliminar(id: string): void {
    Swal.fire({
                title: 'Eliminar Inscripción',
                text: '¿Está seguro que quiere eliminar la inscripción?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar',
              }).then(
                (result) => {
                            if (result.isConfirmed) {
                            this.miServicioInscripcion.eliminar(id).subscribe(
                              data => {
                                Swal.fire(
                                'Eliminado!',
                                'La inscripción ha sido eliminada correctamente',
                                'success',
                                );
                                this.ngOnInit();
                              },
                            );
                            }
                  });
  }

}
