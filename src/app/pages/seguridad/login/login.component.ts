import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  contrasena: string = '';
  constructor(private miServicioSeguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {
    console.debug('onInit LOGIN');
  }

  login() {
    console.debug('Login button');
    console.log('e-mail: ' + this.email + ' contraseña: ' + this.contrasena);
    const elUsuario: Usuario = {
                              email: this.email,
                              contrasena: this.contrasena,
                            };
    this.miServicioSeguridad.login(elUsuario).subscribe(
      data => {
                this.router.navigate(['pages/dashboard']);
                this.miServicioSeguridad.guardarDatosSesion(data);
              },
      error => {
                Swal.fire({ title: 'Error Login',
                            text: error['error']['message'],
                            icon: 'error',
                            timer: 5000,
                });
              },
    );
  }

}
