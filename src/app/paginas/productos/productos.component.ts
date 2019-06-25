import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { URL_SERVICIOS } from 'src/app/config/config';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: [] = [];
  paginaSiguiente: string;
  paginaAnterior: string;
  total: number;

  constructor(
    public _productosService: ProductosService,
  ) { }

  cargarProductos(url: string) {
    this._productosService.cargarProductos( url )
      .subscribe( resp => {
        this.productos = resp.data.data 
        this.paginaAnterior = resp.data.prev_page_url;
        this.paginaSiguiente = resp.data.next_page_url;
      });
  }

  ngOnInit() {
    this.cargarProductos(URL_SERVICIOS + '/api/productos?page=1');
  }

}
