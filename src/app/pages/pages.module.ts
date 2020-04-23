import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImagenPipe } from '../pipes/image.pipe';
import { ProductComponent } from './products/products.component';

@NgModule({
  declarations: [
    ProductComponent,
    DashboardComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PAGES_ROUTES 
  ],
  exports: [
    ProductComponent
  ]
})
export class PagesModule { }
