import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Estudiante } from "src/app/modelo2/persona";

@Injectable({
  providedIn: "root",
})
export class EstudianteService {
  API_URI = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getEstudiantes() {
    return this.http.get(`${this.API_URI}/api/estudiante`);
  }

  saveEstudiantes(estudiante: Estudiante) {
    return this.http.post(`${this.API_URI}/api/estudiante`, estudiante);
  }
  getEstudiante(id: number) {
    return this.http.get(`${this.API_URI}/api/estudiante` + id);
  }
  //  saveUser(user: Users) {
  //     return this.http.post(`${this.API_URI}/api/estudiante`, user);
  //   }
}
