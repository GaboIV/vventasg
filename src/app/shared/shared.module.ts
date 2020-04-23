import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PieComponent } from './pie/pie.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MigasComponent } from './migas/migas.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    PieComponent,
    SidebarComponent,
    MigasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    PieComponent,
    SidebarComponent,
    MigasComponent
  ]
})
export class SharedModule { }
