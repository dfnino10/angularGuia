import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../models/cities.model';

@Pipe({
  name: 'ciudadPipe'
})
export class CiudadPipe implements PipeTransform {

  transform(val: string, cities: City[]): string {
    console.log("val: ", val, "cities: ", cities);
    for (let i = 0; i < cities.length; i++) {
      if ("" + cities[i].pk === "" + val) {
        return cities[i].fields.nombre;
      }
      if (i + 1 === cities.length)
        return "Desconocida";
    };
  }
}
