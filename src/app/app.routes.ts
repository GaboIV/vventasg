import { RouterModule, Routes } from '@angular/router';
import { PaginasComponent } from './paginas/paginas.component';
import { NoencontradoComponent } from './compartido/noencontrado/noencontrado.component';
import { LoginGuard } from './servicios/guardias/login.guard';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: PaginasComponent,
        loadChildren: './paginas/paginas.module#PaginasModule',
        data: { 
            titulo: 'Panel Principal',
        },
        canActivate: [ LoginGuard ],
    },
    { path: '**', component: NoencontradoComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );