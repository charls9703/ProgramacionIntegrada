import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { productos } from "../interfaces/producto.interface";

@Injectable({
  providedIn: "root",
})
export class ProductosService {
  cargando = true;
  productos: productos[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http
      .get("https://equipo-92c83.firebaseio.com/productos_idx.json")
      .subscribe((resp: productos[]) => {
        //console.log(resp);
        this.productos = resp;
        this.cargando = false;
      });
  }

  getProducto(id: string){
    return this.http.get(`https://equipo-92c83.firebaseio.com/productos/${id}.json`);

  }



}
