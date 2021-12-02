import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTipoDocumentoService {

  constructor(private http: HttpClient) {}

  API_URI = "http://localhost:8080";



  getTipoDocumento() {
    return this.http.get(`${this.API_URI}/api/tipoDocumento`);
  }
  // getEstudiante(id: number){
  //   return this.http.get( `${this.API_URI}/api/estudiante` + id );
  // }|
  //  saveUser(user: Users) {
  //     return this.http.post(`${this.API_URI}/api/estudiante`, user);
  //   }
}
