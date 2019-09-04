import { Component, OnInit } from '@angular/core';
import { GuiasService } from '../../services/guias/guias.service'
import { Guia } from '../../models/guia.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
          .redes{
            margin: 5px;
          }
          #filtro{
            margin: 45px;
          }
    `]
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    this.cargarGuias();
  }
  ngAfterViewInit() {
  }

  pageLength: number;
  pageSize: 5;
  pageSizeOptions = [5, 10, 25, 100];

  Guias: Guia[] = []
  guiasTotal: Guia[] = []

  citys: any[] = [
    { value: 'steak-0', viewValue: 'Bogota' },
    { value: 'pizza-1', viewValue: 'Cúcuta' },
    { value: 'tacos-2', viewValue: 'Villavicencio' }
  ];
  categorys: any[] = [
    { value: 'steak-0', viewValue: 'Extreme' },
    { value: 'pizza-1', viewValue: 'fly' }
  ];

  Guiasr: Guia[] = [
    {
      apellidoPaterno: 'Duarte',
      apellidoMaterno: 'Sep�lveda',
      nombres: "Eduard",
      documento: '1090366576',
      fechaNacimiento: new Date(1992, 2, 14),
      sexo: 'M',
      descripcion: 'Experto en Deportes extremos',
      // una  frase debajo del nombre
      categorias: ['Deportes', 'canoping'], //ojo debe ser una lista
      //faltan
      fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CHZcIamB4hIA-AsPIC9eyBeC-WK17CG4PICi3K_pnqhwtiGF',
      usuariosRedes: 'https://github.com/EduarDuarteS',
    },
    {
      apellidoPaterno: 'Gomez',
      apellidoMaterno: 'Tobeda',
      nombres: "Camila",
      documento: '1648526',
      fechaNacimiento: new Date(1996, 5, 8),
      sexo: 'F',
      descripcion: 'Vive la aventura',
      // una  frase debajo del nombre
      categorias: ['DE'], //ojo debe ser una lista
      //faltan
      fotoUrl: 'https://cdn.colombia.com/sdi/2019/03/23/las-mujeres-de-bogota-se-toman-los-deportes-extremos-sobre-ruedas-721813.jpg',
      usuariosRedes: 'https://www.facebook.com/people/Camila/100037474220943',
    }
  ];
  constructor(public _guiasService: GuiasService) { }


  cargarGuias() {
    this._guiasService.getAllGuias()
      .subscribe(data => {
        // if (data.length>0)
        // this.guiasTotal = (data.guias);
        // this.pageLength = this.guiasTotal.length;
        this.Guias = (data.guias);
        this.guiasTotal = this.Guias;
        this.pageLength = this.Guias.length;
        // console.log("cargado del service", data);
        this.dividirGuias();
      });
  }

  dividirGuias() {
    this.Guias = this.guiasTotal.slice(0, 5);
    console.log(this.Guias);
    console.log(this.guiasTotal);
  }
  guiasMostrar() {

  }
  pageChangeEvent(event) {
      console.log(event);
      const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
      this.Guias = this.guiasTotal.slice(offset).slice(0, event.pageSize);
    }

}
