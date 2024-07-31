import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'main', loadChildren: () => import('./main/main.module').then(x => x.MainModule)}
];
