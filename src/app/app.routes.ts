import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./customer/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'profile',
        loadComponent: () => import('./customer/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'stock',
        loadChildren: () => import('./customer/stock/stock.module').then(m => m.StockModule)
    }
];
