import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/Servicio/ServiceEstudiante/service-estudiante.service';
import { TipoDocumentoService } from 'src/app/Servicio/ServiceTipoDocumento/service-tipo-documento.service';
import { Estudiante } from 'src/app/modelo2/persona';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css'],
})
export class PanelAdminComponent implements OnInit {
  tipoDocumentos: any = [];

  estudiante: Estudiante = {
    grado: '',
    director: '',
    nombreAcudiente: '',
    unaPersona: {
      unTipoDocumento: {
        idTipoDocumento: 1,
        nombre: '',
      },
      numeroDocumento: '',
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      telefono: '',
      direccion: '',
      barrio: '',
      fechaCreacion: '',
    },
  };

  // };

  // tipoDocumento: "",
  // numeroDocumento: undefined,
  // nombreCompleto: "",
  // apellidoCompleto: "",
  // grado: "",
  // fechaNacimiento: "",
  // fechaRegistro: "",
  // nombreAcudiente: "",
  // parentesco: "",
  // telefono: "",
  // director: "",
  // barrio: "",
  fecha: string;
  constructor(
    private tipoDocumentoService: TipoDocumentoService,
    private estudianteService: EstudianteService
  ) {
    var f = new Date();
    var _fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
    this.fecha = _fecha;
  }

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.getTipoDocumento();
  }

  save(estudiante: Estudiante) {
    this.estudiante.unaPersona.fechaCreacion = this.fecha;
    alert(estudiante);
    console.log(estudiante);
    this.estudianteService.saveEstudiantes(estudiante).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTipoDocumento() {
    this.tipoDocumentoService.getTipoDocumento().subscribe(
      (res: any) => {
        console.log(res);

        this.tipoDocumentos = res;
      },
      (err: any) => console.log(err)
    );
  }
}
