import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const PagesRoutes: Routes = [    
    { 
        path: 'productos', 
        component: ProductComponent, 
        data: { 
            titulo: 'Lista de productos',
            rutas: [
                'Panel Principal', 'Productos'
            ]
        }       
    },
    { 
        path: '', 
        component: DashboardComponent,
        data: { 
            titulo: 'Panel principal'
        }    
 }
];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );