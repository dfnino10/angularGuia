import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  addUserForm: FormGroup;
  buttonRegister = false;
  validSex = false;
  errorPassword = false;
  hasPass = false;
  hasConfirmPass = false;
  sex = '';

  regExpValidMail: RegExp = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;
  errorMail = false;
  formattedDate: string;
  public userToCreate: Usuario;
  public confPassword: string;

  constructor(public router: Router, public usuarioService: UsuarioService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userToCreate = new Usuario();
    this.initFieldForm();
  }

  registerUser() {
    this.userToCreate.usuario = this.addUserForm.controls.user.value;
    this.userToCreate.nombres = this.addUserForm.controls.names.value;
    this.userToCreate.apellidos = this.addUserForm.controls.lastNames.value;
    this.userToCreate.documento = this.addUserForm.controls.documentNumber.value;
    this.userToCreate.sexo = this.sex;
    this.userToCreate.fechaNacimiento = this.formattedDate;
    this.userToCreate.telefono = this.addUserForm.controls.phoneNumber.value;
    this.userToCreate.correo = this.addUserForm.controls.email.value;
    this.userToCreate.password = this.addUserForm.controls.password.value;

    this.usuarioService.httpServiceCreateUser(this.userToCreate).subscribe(
      response => {
        this.addUserForm.reset();
        this.validateForm();
        swal.fire('Su registro ha sido exitoso',
        'Bienvenido!',
        'success');
        console.log('success create user', response);
      }, error => {
        swal.fire('Error registrando usuario', 'Intente nuevamente.', 'error');
        console.log('fail create user', error);
      }
    );
  }

  initFieldForm() {
    this.addUserForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required])],
      names: ['', Validators.compose([Validators.required])],
      lastNames: ['', Validators.compose([Validators.required])],
      documentNumber: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      sexM: [],
      sexF: [],
      bornDate: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
  }


  onKeyInput(value, field) {
    if (field === 'password') {
      this.hasPass = true;
    }
    if (field === 'confirmPassword') {
      this.hasConfirmPass = true;
    }
    this.addUserForm.controls[field].setValue(value);
    this.validateForm();
  }

  validateForm() {
    if (this.hasConfirmPass && this.hasPass) {
      this.errorPassword = this.addUserForm.controls.password.value !== this.addUserForm.controls.confirmPassword.value;
    }
    this.buttonRegister = this.addUserForm.valid && this.validSex && !this.errorPassword && !this.errorMail;
  }

  validateSex(value, field) {
    if (value === 'F') {
      this.addUserForm.controls.sexF.setValue(value);
      this.addUserForm.controls.sexM.setValue(null);
      this.sex = 'F';
    } else {
      this.sex = 'M';
      this.addUserForm.controls.sexM.setValue(value);
      this.addUserForm.controls.sexF.setValue(null);
    }

    this.validSex = true;
    this.validateForm();
  }

  validateNumber(value, field) {
    const newValue = value ? value.replace(/([^0-9])+/g, '') : '';
    this.addUserForm.controls[field].setValue(newValue);
    this.validateForm();
  }

  validateEmail() {
    if (this.regExpValidMail.test(this.addUserForm.controls.email.value)) {
      this.errorMail = false;
      this.validateForm();
    } else {
      this.errorMail = true;
      this.validateForm();
    }
  }

  validateDate(value, field) {
    this.formattedDate = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate()  ;
    this.addUserForm.controls[field].setValue(value);
    this.validateForm();
  }

}
