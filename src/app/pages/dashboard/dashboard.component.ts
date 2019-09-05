import { Component, OnInit } from '@angular/core';
import { GuiasService } from '../../services/guias/guias.service'
import { Guia } from '../../models/guia.model';
import { City } from '../../models/cities.model'


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
    // this.getGuias();
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
  categorys: any[] = [
    { value: 'all', viewValue: 'Todas' },
    { value: 'Deportes', viewValue: 'Deportes' },
    { value: 'DE', viewValue: 'DE' },
    { value: 'canoping', viewValue: 'canoping' },
  ];

  constructor(public _guiasService: GuiasService) { }
  ciudadVal(val: string) {
    this.cities.forEach(function(city) {
      console.log("val",val,"city.pk",city.pk)
      if ("" + city.pk == "" + val){
        console.log("entro");
        return city.fields.nombre;
      }
    });
    // return "Desconocida";
  }

  loadCities() {
    this._guiasService.getCities()
      .subscribe(data => {
        let largo = Object.entries(data).length;
        for (let i = 0; i < largo; i++) {
          this.cities.push(data[i]);
        }
      })
  };

  getGuias() {
    this._guiasService.getAllGuias()
      .subscribe(data => {
        this.Guias = (data.guias);
        this.guiasTotal = this.Guias;
        this.pageLength = this.Guias.length;
        this.dividirGuias();
      });
  }
  cargarGuias() {
    this._guiasService.getGuias()
      .subscribe(data => {
        console.log("guias:", data[0].fields);
        console.log("length:", data.length);
        for (let i = 0; i < data.length; i++) {
          let guiaAux = new Guia();
          guiaAux.pk = data[i].pk;
          guiaAux.apellidoMaterno = data[i].fields.apellidoMaterno;
          guiaAux.apellidoMaterno = data[i].fields.apellidoMaterno;
          guiaAux.nombres = data[i].fields.nombres;
          guiaAux.documento = data[i].fields.documento;
          guiaAux.fechaNacimiento = data[i].fields.fechaNacimiento;
          guiaAux.sexo = data[i].fields.sexo;
          guiaAux.descripcion = data[i].fields.descripcion;
          guiaAux.categorias = ["Montañismo", "" + data[i].fields.categorias];
          // guiaAux.ciudad = ""+this.ciudadVal(data[i].fields.ciudad);

          guiaAux.ciudad = "" + data[i].fields.ciudad;
          guiaAux.fotoUrl = "assets/images/users/noimage.png";
          // guiaAux.fotoUrl = data[i].fields.fotoUrl;
          // guiaAux.usuariosRedes = data[i].fields.usuariosRedes;
          this.Guias.push(guiaAux);
        }
        console.log("Guias: ", this.Guias);
        // this.Guias = (data.guias);
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
    if (cat == "")
      return
    cat = "" + cat;
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
      this.guiaFiltered = this.guiasTotal.filter(guiaCiudad => guiaCiudad.categorias.includes("" + cat));
    } else {
      console.log("entro ciudad");
      if (!callCiu)
        this.cambiaCiu(this.ciuSeled, true);
      this.guiaFiltered = this.guiaFiltered.filter(guiaCiudad => guiaCiudad.categorias.includes("" + cat));

    }

    this.Guias = this.guiaFiltered.slice(0, 5);
    this.pageLength = this.guiaFiltered.length;
  }
  cambiaCiu(ciu: string, callCat?: boolean) {
    if (ciu == "")
      return
    ciu = "" + ciu;
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

}
