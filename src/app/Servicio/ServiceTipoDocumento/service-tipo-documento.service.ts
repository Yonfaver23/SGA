import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TipoDocumentoService {
  API_URI = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getTipoDocumento() {
    return this.http.get(`${this.API_URI}/api/tipoDocumento`);
  }
  // getEstudiante(id: number){
  //   return this.http.get( `${this.API_URI}/api/estudiante` + id );
  // }
  //  saveUser(user: Users) {
  //     return this.http.post(`${this.API_URI}/api/estudiante`, user);
  //   }
}
