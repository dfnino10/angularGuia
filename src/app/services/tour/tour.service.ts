import { Injectable } from '@angular/core';
import { Tour } from "../../models/tour.model";
import { HttpClient } from '@angular/common/http';
import { TOURS } from "./tourMock";
import { URL_SERVICIOS } from 'src/app/config/config';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  tours: Tour[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllTours(): Tour[] {
    this.tours = TOURS;
    return this.tours;
  }

  getToursById(id: string) : Observable<Tour[]> {

    this.httpClient.get(URL_SERVICIOS + '/guia/getTour?pk=' + id).subscribe((data) => {

      if(data instanceof Array) {
        console.log("true");
        data.forEach( dataItem => {
            console.log(dataItem);
            let tour = new Tour();
            tour.name = dataItem.fields.nombre;
            tour.city = "Bogotá";
            tour.price = dataItem.fields.precio;
            tour.description = dataItem.fields.descripcion;
            tour.category = "tour";
            tour.responsible = dataItem.fields.guia;
            this.tours.push(tour);
        });
      }else if(data instanceof Object) {
        console.log(JSON.parse(JSON.stringify(data)).mensajeError);
        this.tours = []; 
      }
    });
    return of(this.tours);

  }
}
