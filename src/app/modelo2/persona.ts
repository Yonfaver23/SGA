export class Persona {
    idPersona: number;
    unTipoDocumento: TipoDocumento;
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
  
  }
  
  export class TipoDocumento {
    idTipoDocumento: number;
    nombre: string;
  }
  export class Estudiante{
    idEstudiante: string;
    grado: string;
    director: string;
    nombreAcudiente: string;
    unaPersona: Persona;
  }
  