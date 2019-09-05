import { Component, OnInit } from '@angular/core';
import { GuiasService } from '../../services/guias/guias.service'
import { Guia } from '../../models/guia.model'
import { Cities, City } from '../../models/cities.model'


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
    this.loadCities();
  }
  ngAfterViewInit() {
  }

  pageLength: number;
  pageSize: 5;
  pageSizeOptions = [5, 10, 25, 100];

  Guias: Guia[] = [];
  catSeled: string = "";
  ciuSeled: string = "";
  guiasTotal: Guia[] = [];
  guiaFiltered: Guia[] = []


  cities: City[] = [
    {
      fields: { nombre: "Todas" },
      pk: "all"
    },
  ]
  citys: any[] = [
    { value: 'all', viewValue: 'Todas' },
    { value: 'Bogota', viewValue: 'Bogotá' },
    { value: 'Cúcuta', viewValue: 'Cúcuta' },
    { value: 'villavicencio', viewValue: 'Villavicencio' }
  ];
  categorys: any[] = [
    { value: 'all', viewValue: 'Todas' },
    { value: 'Deportes', viewValue: 'Deportes' },
    { value: 'DE', viewValue: 'DE' },
    { value: 'canoping', viewValue: 'canoping' },
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


  loadCities() {
    this._guiasService.getCities()
      .subscribe(data => {
        let largo = Object.entries(data).length;
        for (let i = 0; i < largo; i++) {
          this.cities.push(data[i]);
        }
      })
  };

  cargarGuias() {
    this._guiasService.getAllGuias()
      .subscribe(data => {
        this.Guias = (data.guias);
        this.guiasTotal = this.Guias;
        this.pageLength = this.Guias.length;
        this.dividirGuias();
      });
  }

  dividirGuias() {
    this.Guias = this.guiasTotal.slice(0, 5);
  }
  guiasMostrar() {

  }
  pageChangeEvent(event) {
    if (this.catSeled !== '' && this.ciuSeled !== '') {
      const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
      this.Guias = this.guiaFiltered.slice(offset).slice(0, event.pageSize);
    } else {
      const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
      this.Guias = this.guiasTotal.slice(offset).slice(0, event.pageSize);
    }
  }

  //filtros
  cambiaCat(cat: string, callCiu?: boolean) {
    if (callCiu)
      this.guiaFiltered = this.guiasTotal;
    this.catSeled = cat;
    if (cat === "all") {
      if (this.ciuSeled === '' || this.ciuSeled === 'all') {
        this.guiaFiltered = this.guiasTotal;
      } else {
        if (!callCiu)
          this.cambiaCiu(this.ciuSeled, true);
      }
    } else if (this.ciuSeled === '' || this.ciuSeled === 'all') {
      if (!callCiu)
        this.cambiaCiu(this.ciuSeled, true);
      this.guiaFiltered = this.guiasTotal.filter(guiaCiudad => guiaCiudad.categorias.includes(cat));
    } else {
      console.log("entro ciudad");
      if (!callCiu)
        this.cambiaCiu(this.ciuSeled, true);
      this.guiaFiltered = this.guiaFiltered.filter(guiaCiudad => guiaCiudad.categorias.includes(cat));
    }

    this.Guias = this.guiaFiltered.slice(0, 5);
    this.pageLength = this.guiaFiltered.length;
  }
  cambiaCiu(ciu: string, callCat?: boolean) {
    if (callCat)
      this.guiaFiltered = this.guiasTotal;
    this.ciuSeled = ciu;
    if (ciu === "all") {
      if (this.catSeled === '' || this.catSeled === 'all') {
        this.guiaFiltered = this.guiasTotal;
      } else {
        if (!callCat)
          this.cambiaCat(this.catSeled, true);
      }
    } else if (this.catSeled === '' || this.catSeled === 'all') {
      if (!callCat)
        this.cambiaCat(this.catSeled, true);
      this.guiaFiltered = this.guiasTotal.filter(guiaCiudad => guiaCiudad.ciudad.includes(ciu));
    } else {
      if (!callCat)
        this.cambiaCat(this.catSeled, true);
      this.guiaFiltered = this.guiaFiltered.filter(guiaCiudad => guiaCiudad.ciudad.includes(ciu));
    }
    this.Guias = this.guiaFiltered.slice(0, 5);
    this.pageLength = this.guiaFiltered.length;
  }
  cambiaCiu2(ciu: string) {
    this.ciuSeled = ciu;
    if (ciu == "all") {
      this.guiaFiltered = this.guiasTotal;
    } else {
      this.guiaFiltered = this.guiasTotal.filter(guiaCiudad => guiaCiudad.ciudad.includes(ciu));
    }
    this.Guias = this.guiaFiltered.slice(0, 5);
    this.pageLength = this.guiaFiltered.length;
  }
}
