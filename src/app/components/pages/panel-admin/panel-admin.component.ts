import { Component, OnInit } from '@angular/core';
import { ServiceEstudianteService } from 'src/app/Servicio/ServiceEstudiante/service-estudiante.service';
import { ServiceTipoDocumentoService } from 'src/app/Servicio/ServiceTipoDocumento/service-tipo-documento.service';
import { Estudiante } from 'src/app/modelo2/persona';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css'],
})
export class PanelAdminComponent implements OnInit {
  tipoDocumentos: any = [];
  edit: boolean = false;

  estudiante: any = {
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

  fecha: string;

  constructor(
    private tipoDocumentoService: ServiceTipoDocumentoService,
    private estudianteService: ServiceEstudianteService,
    private route: Router,
    private activedRoute: ActivatedRoute
  ) {
    console.log('yhholamundo');
  }

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.getTipoDocumento();
    const params = this.activedRoute.snapshot.paramMap.get('id');

    if (params) {
      const id = Number(params);
      console.log(id);
      this.updateDatosInput(id);
    }
  }

  updateDatosInput(id: any) {
    const res = this.estudianteService.getEstudiante(id).subscribe(
      (res) => {
        console.log(res);
        console.log(this.estudiante);
        this.estudiante = res;
        this.edit = true;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  update(estudiante: any) {
    console.log(this.estudiante);
    // this.estudianteService.updateEstudiantes(estudiante).subscribe(
    //   (res) => {
    //     console.log(res);

    //     this.route.navigate([' /admin/panel']);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  save(estudiante: Estudiante) {
    this.edit = !this.edit;
    console.log(this.edit);
    var f = new Date();
    var _fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
    this.fecha = _fecha;
    this.estudiante.unaPersona.fechaCreacion = this.fecha;
    console.log(estudiante);
    this.estudianteService.saveEstudiantes(estudiante).subscribe(
      (res) => {
        console.log(res);

        window.location.reload();
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
