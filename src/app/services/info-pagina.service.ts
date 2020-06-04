import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InfoPagina } from "../interfaces/info-pagina.interface";

@Injectable({
  providedIn: "root",
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  equipo: any[] =[];

  private cargarInfo() {
    //console.log("servicio de info pagina");

    //leer el archivo JSON
    this.http.get("assets/data/data-pagina.json")
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;

      });
  }
  private cargarEquipo(){
    //leer el archivo de lass base de datos
    this.http.get("https://equipo-92c83.firebaseio.com/equipo.json")
      .subscribe((resp: any) => {

        this.equipo = resp;

        //console.log(resp);
      });
  }

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }
}

