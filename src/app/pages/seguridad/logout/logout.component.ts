import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private miServicioSeguridad: SeguridadService, private router: Router) {
    console.debug('Constructor LOGOUT');
  }

  ngOnInit(): void {
    console.debug('Bye Bye');
    this.miServicioSeguridad.logout();
    this.router.navigate(['pages/dashboard']);
  }

}
