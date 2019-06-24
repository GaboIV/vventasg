import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { FormsModule } from '@angular/forms';
import { PAGINAS_ROUTES } from './paginas.routes';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';

@NgModule({
  declarations: [
    ProductosComponent,
    PanelPrincipalComponent
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
