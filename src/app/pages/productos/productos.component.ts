import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "src/app/services/productos.service";
import { productoDescripcion } from "src/app/interfaces/producto-descripcion.interface";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"],
})
export class ProductosComponent implements OnInit {
  producto: productoDescripcion;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
      //console.log(parametros['id'])
      this.productoService
        .getProducto(parametros["id"])
        .subscribe((prodcuto: productoDescripcion) => {
          //console.log(prodcuto);
          this.id = parametros["id"];
          this.producto = prodcuto;
        });
    });
  }
}
