import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatDialogModule } from '@angular/material';

//Modulos
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

// Rutas
import { APP_ROUTES } from "./app-routes";
import { ServiceModule } from './services/service.module';
import { UsuarioService } from './services/service.index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    PagesModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [ServiceModule, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
