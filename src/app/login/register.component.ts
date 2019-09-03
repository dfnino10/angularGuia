import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import Swal from 'sweetalert2'
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario:Usuario
  public confPassword:string

  constructor(public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario()    
  }

  registro(forma: NgForm) {
    console.log(forma);
    if (forma.invalid) {
      Swal.fire('Oops...', 'revisa los datos ingresados', 'error')
      return;
    }

    this._usuarioService.registar(this.usuario)
      .subscribe(data => {
      });
  }

}
