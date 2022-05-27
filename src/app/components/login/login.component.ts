import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  Ingresar() {
    const { email, password } = this.usuario;
    // this.authService.register para crear usuario
    // this.authService.login para ingresar con el usuario creado
    this.authService.login(email, password).then(res => {
      console.log("Ingreso con exito ", res);
    })
  }

  IngresarConGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("Ingreso con exito ", res);
    })
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
