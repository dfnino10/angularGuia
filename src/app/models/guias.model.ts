
export class GuiaT {
  model?: string;
  pk: number;
  fields: {
    apellidoPaterno: string,
    apellidoMaterno: string,
    nombres: string,
    documento: number,
    fechaNacimiento: string,
    sexo: string,
    descripcion: string,
    categoria: number,
    ciudad: number
  };
};

export class GuiasT {
  arrayGuiasT: Array<GuiaT>;
  length:number;
}
