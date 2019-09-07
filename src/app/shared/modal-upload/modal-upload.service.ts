import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  // public ocultar:string = 'oculto';
  public ocultar:string = 'oculto';

  public notificacion = new EventEmitter<any>();

  constructor() {
    console.log("servicio modal inject")
  }

  ocultarModal(){
    this.ocultar='oculto';
  }
  mostrarModal(){
    this.ocultar='';
  }
}
