import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './../components/login/login.component';
import { TabComponent } from './../components/tab/tab.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: TabComponent
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
