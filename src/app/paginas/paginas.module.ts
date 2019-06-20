import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { FormsModule } from '@angular/forms';
import { PAGINAS_ROUTES } from './paginas.routes';

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    FormsModule,
    PAGINAS_ROUTES 
  ],
  exports: [
    ProductosComponent
  ]
})
export class PaginasModule { }
