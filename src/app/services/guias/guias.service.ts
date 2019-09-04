import { Injectable } from '@angular/core';
import { Guia, Guias } from "../../models/guia.model";
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuiasService {

  guias: Guia[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllGuias(): Observable<Guias> {

    let UrlMockUp: string = "https://demo1489608.mockable.io";

    return this.httpClient.get<Guias>(UrlMockUp + '/guias')
    .pipe(
      retry(1),
      catchError(err => {
        return Observable.throw(err);
      }
    )
  )
};
    // // this.httpClient.get(URL_SERVICIOS + '/guia/').subscribe((data) => {
    // this.httpClient.get(UrlMockUp + '/guias').subscribe((data: any) => {
    //   this.guias = data.guias;
    //   // console.log("data: ",data.guias);
    //   // console.log(JSON.stringify(data));
    //   let arrayGuias = data.guias;
    //   if (arrayGuias instanceof Array) {
    //     arrayGuias.forEach(dataItem => {
    //       // console.log("datai: ",dataItem);
    //       let guia = new Guia();
    //       guia.apellidoPaterno = dataItem.nombre;
    //       guia.apellidoMaterno = dataItem.apellidoMaterno;
    //       guia.nombres = dataItem.nombres;
    //       guia.documento = dataItem.documento;
    //       guia.fechaNacimiento = new Date();
    //       guia.sexo = dataItem.sexo;
    //       guia.descripcion = dataItem.descripcion;
    //       guia.categorias = dataItem.categorias;
    //       guia.fotoUrl = dataItem.fotoUrl;
    //       guia.usuariosRedes = dataItem.usuariosRedes;
    //       console.log("guia:", guia);
    //       this.guias.push(guia);
    //     });
    //   } else if (data instanceof Object) {
    //     console.log(JSON.parse(JSON.stringify(data)).mensajeError);
    //     this.guias = [];
    //   }
    // });
    // console.log("return: ", this.guias)
    // // return of(this.guias);
};
