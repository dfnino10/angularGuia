import { NgModule } from '@angular/core';
import { CategoriaPipe } from './categoria.pipe';
import { CiudadPipe } from './ciudad.pipe';



@NgModule({
  imports: [ ],
  declarations: [
    CategoriaPipe,
    CiudadPipe
  ],
  exports: [
    CategoriaPipe,
    CiudadPipe
  ]
})
export class PipesModule { }
