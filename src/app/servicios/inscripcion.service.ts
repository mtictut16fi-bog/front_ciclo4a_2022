import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Inscripcion } from '../modelos/inscripcion.model';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {

  constructor(private http: HttpClient) {
    console.debug('Constructor servicioInscripciones');
  }

  listar(): Observable<Inscripcion[]> {
    console.debug('servicioInscripciones-> listar');
    const url = `${environment.url_gateway}/inscripciones`;
    return this.http.get<Inscripcion[]>(url);
  }

  getInscripcion(id: string): Observable<Inscripcion> {
    console.debug('servicioInscripciones-> getInscripción: ' + id);
    const url = `${environment.url_gateway}/inscripciones/${id}`;
    return this.http.get<Inscripcion>(url);
  }

  crear(body: Inscripcion): Observable<Inscripcion> {
    console.debug('servicioInscripciones-> crearInscripción');
    const url = `${environment.url_gateway}/inscripciones`;
    return this.http.post<Inscripcion>(url, body);
  }

  editar(id: string, data: Object): Observable<Inscripcion> {
    console.debug('servicioInscripciones-> editarInscripción: ' + id);
    const url = `${environment.url_gateway}/inscripciones/${id}`;
    return this.http.patch<Inscripcion>(url, data);
  }

  eliminar(id: string) {
    console.debug('servicioInscripciones-> eliminar');
    const url = `${environment.url_gateway}/inscripciones/${id}`;
    return this.http.delete<Inscripcion>(url);
  }
}
