import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    FormsModule    
  ],
  exports: [
    ProductosComponent
  ]
})
export class PaginasModule { }
