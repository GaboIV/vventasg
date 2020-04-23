import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';
import { GeneralesService } from 'src/app/services/general.service';
import { Unidad } from 'src/app/models/unit.model';
import { Product } from 'src/app/models/product.model';
import { Marca } from 'src/app/models/brand.model';
import { Grupo } from 'src/app/models/group.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  paginaSiguiente: string;
  paginaAnterior: string;
  total: number;
  tituloAlerta = 'Correcto';
  selectedFile: File;
  resultado: any;
  units: Unidad[];
  brands: Marca[];
  groups: Grupo[];
  dialog = false;
  modalProducto: any = [] ;
  tempProd: Product = new Product('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, '') ;

  constructor(
    public _productService: ProductService,
    public _generalService: GeneralesService,
  ) { }

  cargarProductos(page: number) {
    this._productService.getProducts( page )
      .subscribe( resp => {
        this.products = resp.data.data; 
        this.paginaAnterior = resp.data.prev_page_url;
        this.paginaSiguiente = resp.data.next_page_url;
      });
  }

  getUnits(){
    this._productService.getUnits()
    .subscribe( resp => {
      this.units = resp.data.data;
    })
  }

  getBrands(){
    this._productService.getBrands()
    .subscribe( resp => {
      this.brands = resp.data.data;
    })
  }

  getGroups(){
    this._productService.getGroups()
    .subscribe( resp => {
      this.groups = resp.data.data;
    })
  }

  verificarCambio( producto, cambio, indice, dato ) {
   if (producto[indice] !== cambio) {
     producto[indice] = cambio;
     this.updateProduct( producto, dato );
   };
  }

  updateProduct( product: any, text = 'Dato', modal = false) {

    const index = this.products.findIndex(prod => prod.id === product.id);

    this._productService.updateProduct( product )
    .subscribe( resp => {
      this.products[index] = resp;
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
    this._generalService.subirImagen( producto.id, this.selectedFile, 'productos' )
      .subscribe( res => {
        this.resultado = res;
        producto.imagen = this.resultado.imagen;
      });
  }

  verLista(producto){
    let that = this;
    var options = {};

    this.units.forEach(unidad => {
      options[unidad.id] = unidad.description_pl;
    });

    swal.fire({
      title: 'Selecciona el tipo de unidad para ' + producto.descripcion,
      input: 'select',
      inputOptions: options,
      inputPlaceholder: 'Tipo de unidad',
      showCancelButton: true,
    }).then(function (result) {
      if (result.value) {
        producto.unidad_id = result.value;
        console.log(result.value);
        that.updateProduct( producto, 'Unidad' );
      }      
    });
  }

  mostrarDialog( producto: Product ) {
    this.tempProd = Object.assign({}, producto);
    if (this.tempProd.productoscomanda === null) {
      this.tempProd.productoscomanda = {
        status: 0
      };
    }
    if (this.tempProd.productocaja === null) {
      this.tempProd.productocaja = {
        status: 0
      };
    }
    this.modalProducto = producto;
    this.dialog = true;
  }

  buscarProducto ( dato ) {
    this._productService.searchProducts( dato )
      .subscribe( res => {
        this.resultado = res;
        console.log(this.resultado);
        this.products = res;
      });
  }

  ngOnInit() {
    this.cargarProductos(1);
    this.getUnits();
    this.getBrands();
    this.getGroups();
  }
}
