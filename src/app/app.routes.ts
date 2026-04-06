import { Routes } from '@angular/router';
import { DashboardShellComponent } from './layout/dashboard-shell.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { ReportsPageComponent } from './pages/reports-page.component';
import { SettingsPageComponent } from './pages/settings-page.component';
import { UsersPageComponent } from './pages/users-page.component';

export const routes: Routes = [
	{
		path: '',
		component: DashboardShellComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'home' },
			{ path: 'home', component: DashboardPageComponent },
			{ path: 'projects', component: UsersPageComponent },
			{ path: 'about', component: ReportsPageComponent },
			{ path: 'contact', component: SettingsPageComponent }
		]
	},
	{ path: '**', redirectTo: '' }
];
