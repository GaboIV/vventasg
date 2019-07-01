import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { URL_SERVICIOS } from 'src/app/config/config';
import swal from'sweetalert2';
import { GeneralesService } from 'src/app/servicios/generales.service';

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
  tituloAlerta = 'Correcto';
  selectedFile: File;
  resultado: any;

  constructor(
    public _productosService: ProductosService,
    public _generalesService: GeneralesService,
  ) { }

  cargarProductos(url: string) {
    this._productosService.cargarProductos( url )
      .subscribe( resp => {
        this.productos = resp.data.data; 
        this.paginaAnterior = resp.data.prev_page_url;
        this.paginaSiguiente = resp.data.next_page_url;
      });
  }

  actualizarProducto( producto: any, text = 'Dato'){
    this._productosService.actualizarProducto( producto )
    .subscribe( resp => {
      const Toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      });      
      Toast.fire({
        type: 'success',
        title: '<span style="text-align: left">Dato actualizado correctamente: <br> ' + text + ' de producto</div>'
      });
    });
  }

  subirImagen(event, producto: any) {
    console.log(producto);
    this.selectedFile = event.target.files[0];
    this._generalesService.subirImagen( producto.id, this.selectedFile, 'productos' )
      .subscribe( res => {
        this.resultado = res;
        producto.imagen = this.resultado.imagen;
      });
  }

  ngOnInit() {
    this.cargarProductos(URL_SERVICIOS + '/api/productos?page=1');
  }

}
