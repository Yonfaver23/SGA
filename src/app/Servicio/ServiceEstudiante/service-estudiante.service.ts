import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante } from 'src/app/modelo2/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceEstudianteService {
  constructor(private http:HttpClient) { }
  url="http://localhost:8080/api/estudiante"

  getEstudiantes() {
    return this.http.get<Estudiante[]>(this.url);
  }
  saveEstudiantes(estudiante:Estudiante){
    return this.http.post<Estudiante>(this.url,estudiante);
  }

  getEstudiante(id: number) {
    return this.http.get<Estudiante>(this.url+"/"+id)
  }

}
  
