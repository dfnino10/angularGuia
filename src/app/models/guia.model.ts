
export class Tour {
  apellidoPaterno: string; //CharField(max_length=35)
  apellidoMaterno: string; //CharField(max_length=35)
  nombres: string; //CharField(max_length=35)
  documento: string; //CharField(max_length=11)
  fechaNacimiento: Date; //models.DateField()
  sexo: string; //SEXOS = (('F', 'Femenino'),('M', 'Masculino'))
  descripcion: string; //models.CharField(max_length=200)
  categoria: string; //
}
/*
CATEGORIAS = (
  ('Mu', 'Museos'),
  ('Re', 'Restaurantes'), 
  ('Bic', 'Paseos de Bicileta'),
  ('SO', 'Sitios ocultos')
)
*/
