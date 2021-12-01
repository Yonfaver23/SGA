import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../Servicio/ServiceEstudiante/service-estudiante.service';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css'],
})
export class TablaPersonaComponent implements OnInit {
  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.getTipoDocumento();
  }

  getTipoDocumento() {
    this.estudianteService.getEstudiantes().subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => console.log(err)
    );
  }
}
