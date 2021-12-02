import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ServiceEstudianteService } from '../../Servicio/ServiceEstudiante/service-estudiante.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css'],
})
export class TablaPersonaComponent implements AfterViewInit, OnInit {
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  estudiantes: any = [];
  constructor(
    private estudianteService: ServiceEstudianteService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.getEstudiante();
  }

  getEstudiante() {
    this.estudianteService.getEstudiantes().subscribe(
      (res: any) => {
        this.estudiantes = res;
        console.log(this.estudiantes);
      },
      (err: any) => console.log(err)
    );
  }
  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute('view-person-id')) {
        this.router.navigate([
          '/person/' + event.target.getAttribute('view-person-id'),
        ]);
      }
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
