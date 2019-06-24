import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';

const paginasRoutes: Routes = [    
    { 
        path: 'productos', 
        component: ProductosComponent, 
        data: { 
            titulo: 'Lista de productos',
            rutas: [
                'Panel Principal', 'Productos'
            ]
        }       
    },
    { 
        path: '', 
        component: PanelPrincipalComponent,
        data: { 
            titulo: 'Panel principal'
        }    
 }
];

export const PAGINAS_ROUTES = RouterModule.forChild( paginasRoutes );