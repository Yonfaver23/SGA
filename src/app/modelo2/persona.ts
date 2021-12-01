export class Estudiante {
  grado: string;
  director: string;
  nombreAcudiente: string;
  unaPersona: {
    unTipoDocumento: {
      idTipoDocumento: number;
      nombre: string;
    };
    numeroDocumento: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    telefono: string;
    direccion: string;
    barrio: string;
    fechaCreacion: string;
  };
}
