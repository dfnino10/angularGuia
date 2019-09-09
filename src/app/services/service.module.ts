import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  EmailService,
  LoginGuardGuard,
  AdminGuard,

 } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    EmailService,
    LoginGuardGuard,
    AdminGuard,

  ],
  declarations: []
})
export class ServiceModule { }
