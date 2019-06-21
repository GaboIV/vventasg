import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

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
];

export const PAGINAS_ROUTES = RouterModule.forChild( paginasRoutes );