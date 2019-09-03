
export class Guia {
  apellidoPaterno: string; //CharField(max_length=35)
  apellidoMaterno: string; //CharField(max_length=35)
  nombres: string; //CharField(max_length=35)
  documento: string; //CharField(max_length=11)
  fechaNacimiento: Date; //models.DateField()
  sexo: string; //SEXOS = (('F', 'Femenino'),('M', 'Masculino'))
  descripcion: string; //models.CharField(max_length=200)
  // una  frase debajo del nombre
  categorias: string[]; // Listado de categorias q aplican para el Guia
  //faltan
  fotoUrl: string; //foto de algún citio de la ciudad
  usuariosRedes: string; //(Facebook, Twitter, Instagram)

}
/*
CATEGORIAS = (
  ('Mu', 'Museos'),
  ('Re', 'Restaurantes'),
  ('Bic', 'Paseos de Bicileta'),
  ('SO', 'Sitios ocultos')
)
*/

/* JSON
{
"guias": [
    {
  "apellidoPaterno": "Duarte",
  "apellidoMaterno": "Sep�lveda",
  "nombres": "Eduard",
  "documento": "1090366576",
  "fechaNacimiento": "1992-2-14",
  "sexo": "M",
  "descripcion": "Experto en Deportes extremos",
  "categorias": ["Deportes","canoping"],
  "fotoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CHZcIamB4hIA-AsPIC9eyBeC-WK17CG4PICi3K_pnqhwtiGF",
  "usuariosRedes": "https://github.com/EduarDuarteS"
},
{
  "apellidoPaterno": "Gomez",
  "apellidoMaterno": "Tobeda",
  "nombres": "Camila",
  "documento": "1648526",
  "fechaNacimiento": "1996-5-8",
  "sexo": "F",
  "descripcion": "Vive la aventura",
  "categorias": ["DE"],
  "fotoUrl": "https://cdn.colombia.com/sdi/2019/03/23/las-mujeres-de-bogota-se-toman-los-deportes-extremos-sobre-ruedas-721813.jpg",
  "usuariosRedes": "https://www.facebook.com/people/Camila/100037474220943"
}
]
}
*/
