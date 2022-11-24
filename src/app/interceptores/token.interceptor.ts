import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SeguridadService } from '../servicios/seguridad.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public miServicioSeguridad: SeguridadService, private router: Router) {
    console.debug('Constructor Interceptor');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.debug('Interceptando petición http: ' + request);
    if (this.miServicioSeguridad.usuarioSesionActiva) {
      console.debug('Interceptor->Sesión activa');
      console.debug('TOKEN: ' + this.miServicioSeguridad.usuarioSesionActiva.token);
      request = request.clone({
                              setHeaders: {
                                Authorization: `Bearer ${this.miServicioSeguridad.usuarioSesionActiva.token}`,
                              },
      });
    }
    return next.handle(request).pipe(
      catchError(
        (err: HttpErrorResponse) => {
                                      if (err.status === 401) {
                                        this.router.navigateByUrl('/pages/dashboard');
                                      }
                                      return throwError(err);
        }),
      );
  }
}
