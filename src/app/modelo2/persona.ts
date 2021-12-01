export class Estudiante {
  idEstudiante: string;
  grado: string;
  director: string;
  nombreAcudiente: string;
  unaPersona: {
    idPersona: number;
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
    fechaModificacion?: string;
    estado: string;
  };
}