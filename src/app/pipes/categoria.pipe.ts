import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category.model';


@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(val: string, cities: Category[]): string {
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
