import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { LateralComponent } from './lateral/lateral.component';
import { MigasComponent } from './migas/migas.component';

@NgModule({
  declarations: [
    NoencontradoComponent,
    CabeceraComponent,
    PieComponent,
    LateralComponent,
    MigasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NoencontradoComponent,
    CabeceraComponent,
    PieComponent,
    LateralComponent,
    MigasComponent
  ]
})
export class CompartidoModule { }
