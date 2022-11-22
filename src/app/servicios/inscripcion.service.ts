import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Inscripcion } from '../modelos/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private http: HttpClient) {
    console.debug('Constructor servicioInscripciones');
  }

  listar(): Observable<Inscripcion[]>{
    console.debug('servicioInscripciones-> listar');
    const url = `${environment.url_gateway}/inscripciones`;
    return this.http.get<Inscripcion[]>(url);
  }
}
