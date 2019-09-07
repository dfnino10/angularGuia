import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatDialogModule } from '@angular/material';

//Modulos
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { ImageUploadModule } from 'angular2-image-upload';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ModalUploadComponent } from './shared/modal-upload/modal-upload.component';


// Rutas
import { APP_ROUTES } from "./app-routes";
import { ServiceModule } from './services/service.module';
import { UsuarioService } from './services/service.index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ModalUploadComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    ImageUploadModule.forRoot(),
    MaterialModule,
    MatDialogModule,
    PagesModule,
    FormsModule,
    APP_ROUTES,
    ReactiveFormsModule
  ],
  providers: [ServiceModule, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
