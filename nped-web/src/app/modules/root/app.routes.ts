import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from '../../modules/authentication/pages/login/login.page';
import { DashboardPage } from '../../modules/dashboard/pages/dashboard.page';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'home',
        component: DashboardPage
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
