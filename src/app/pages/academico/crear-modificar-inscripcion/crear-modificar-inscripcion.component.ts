import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Inscripcion } from '../../../modelos/inscripcion.model';
import { InscripcionService } from '../../../servicios/inscripcion.service';

@Component({
  selector: 'ngx-crear-modificar-inscripcion',
  templateUrl: './crear-modificar-inscripcion.component.html',
  styleUrls: ['./crear-modificar-inscripcion.component.scss'],
})
export class CrearModificarInscripcionComponent implements OnInit {
  // a$os: string[] = ['2020', '2021', '2022'];
  // semestres: string[] = ['1', '2'];
  modoCreacion: boolean = true;
  id_inscripcion: string = '';
  intentoEnvio: boolean = false;
  a$o: string = '';
  inscripcion: Inscripcion = {
                                año: '',
                                semestre: '',
                                estudiante: '',
                                materia: '',
                                nota_final: '',
                              };

  constructor(private miServicioInscripcion: InscripcionService,
              private rutaActiva: ActivatedRoute,
              private router: Router) {
    console.debug('Constructor Crear-Modificar');
  }

  ngOnInit(): void {
    console.debug('Inicializando Crear-Modificar');
    if (this.rutaActiva.snapshot.params.id_inscripcion) {
      console.debug('Crear-Modificar -> MODIFICAR');
      this.modoCreacion = false;
      this.id_inscripcion = this.rutaActiva.snapshot.params.id_inscripcion;
      this.getInscripcion(this.id_inscripcion);
    } else {
      console.debug('Crear-Modificar -> CREAR');
      this.modoCreacion = true;
    }
  }

  getInscripcion(id: string) {
    console.debug('GET INSCRIPCIÓN');
    this.miServicioInscripcion.getInscripcion(id).subscribe(
      data => {
                this.inscripcion = data;
                this.inscripcion.estudiante = data.estudiante['nombre'] + ' ' + data.estudiante['apellido'];
                this.inscripcion.materia = data.materia['nombre'];
                console.debug(this.inscripcion);
                this.a$o = this.inscripcion.año;
              },
    );
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.miServicioInscripcion.crear(this.inscripcion).subscribe(
        data => {
                  Swal.fire(
                    'Creado',
                    'La inscripción ha sido creada correctamente',
                    'success',
                  );
                  this.router.navigate(['pages/academico/inscripciones']);
                },
      );
    }
  }

  editar(): void {
    if (this.validarDatosCompletos()) {
      const nota_final = {'nota_final': this.inscripcion.nota_final};
      this.miServicioInscripcion.editar(this.inscripcion._id, nota_final).subscribe(
        data => {
                  Swal.fire(
                    'Actualizado',
                    'La inscripción ha sido actualizada correctamente',
                    'success',
                    );
                    this.router.navigate(['pages/academico/inscripciones']);
                });
    }
  }

  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.inscripcion.año === '' || this.inscripcion.semestre === '' ||
        this.inscripcion.estudiante === '' || this.inscripcion.materia === '' ||
        this.inscripcion.nota_final === '') {
      return false;
    } else {
      return true;
    }
  }

  selectChange(): void {
    console.debug('CAMBIO DETECTADO: ' + this.a$o);
    if (this.a$o !== this.inscripcion.año) {
      this.inscripcion.año = this.a$o;
    }
  }

}
