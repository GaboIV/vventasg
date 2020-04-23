import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './services/guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule',
        data: { 
            titulo: 'Panel Principal',
        },
        // canActivate: [ LoginGuard ],
    },
    { path: '**', component: NotFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );