import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { URL_SERVICIOS } from 'src/app/config/config';
import swal from'sweetalert2';
import { GeneralesService } from 'src/app/servicios/generales.service';
import { Unidad } from 'src/app/modelos/unidad.model';
import { Producto } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  paginaSiguiente: string;
  paginaAnterior: string;
  total: number;
  tituloAlerta = 'Correcto';
  selectedFile: File;
  resultado: any;
  unidades: Unidad[];
  dialog = false;
  modalProducto: any = [] ;
  tempProd: Producto = new Producto('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '') ;

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

  cargarUnidades(){
    this._productosService.cargarUnidades()
    .subscribe( resp => {
      this.unidades = resp.data.data;
    })
  }

  verificarCambio( producto, cambio, indice, dato ) {
   if (producto[indice] !== cambio) {
     producto[indice] = cambio;
     this.actualizarProducto( producto, dato );
   };
  }

  actualizarProducto( producto: any, text = 'Dato', modal = false){
    const index = this.productos.findIndex(prod => prod.id === producto.id);
    this.productos[index] = producto;
    this._productosService.actualizarProducto( producto )
    .subscribe( resp => {
      this.dialog = false;
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

  // verLista(producto){
  //   let that = this;
  //   var options = {};

  //   this.unidades.forEach(unidad => {
  //     options[unidad.id] = unidad.descripcion_pl;
  //   });

  //   swal.fire({
  //     title: 'Selecciona el tipo de unidad para ' + producto.descripcion,
  //     input: 'select',
  //     inputOptions: options,
  //     inputPlaceholder: 'Tipo de unidad',
  //     showCancelButton: true,
  //   }).then(function (result) {
  //     if (result.value) {
  //       producto.unidad_id = result.value;
  //       console.log(result.value);
  //       that.actualizarProducto( producto, 'Unidad' );
  //     }      
  //   });
  // }

  mostrarDialog( producto: Producto ) {
    this.tempProd = Object.assign({}, producto);
    this.modalProducto = producto;
    this.dialog = true;
  }

  buscarProducto ( dato ) {
    this._productosService.buscarProductos( dato )
      .subscribe( res => {
        this.resultado = res;
        console.log(this.resultado);
        this.productos = res;
      });
  }

  ngOnInit() {
    this.cargarProductos(URL_SERVICIOS + '/api/productos?page=1');
    this.cargarUnidades();
  }

}
