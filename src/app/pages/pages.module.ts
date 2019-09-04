
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';


import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

//Material
import { MaterialModule } from '../material.module';
import { TourComponent } from './tour/tour.component'
import { HttpClientModule } from '@angular/common/http';
import { EmailComponent } from './email/email.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    ProfileComponent,
    PagesComponent,
    DashboardComponent,
    AccoutSettingsComponent,
    UsuariosComponent,
    BusquedaComponent,
    TourComponent,
    EmailComponent
  ],
  exports: [
    DashboardComponent,

  ],
  imports: [
    MaterialModule,
    MatDialogModule,
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    EmailComponent
  ]
})
export class PagesModule { }
