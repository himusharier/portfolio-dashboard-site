import { Routes } from '@angular/router';
import { DashboardShellComponent } from './layout/dashboard-shell.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { ReportsPageComponent } from './pages/reports-page.component';

export const routes: Routes = [
	{
		path: '',
		component: DashboardShellComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'home' },
			{ path: 'home', component: DashboardPageComponent },
			{
				path: 'projects',
				loadComponent: () => import('./pages/users-page.component').then((m) => m.UsersPageComponent)
			},
			{ path: 'about', component: ReportsPageComponent },
			{
				path: 'contact',
				loadComponent: () => import('./pages/settings-page.component').then((m) => m.SettingsPageComponent)
			}
		]
	},
	{ path: '**', redirectTo: '' }
];
