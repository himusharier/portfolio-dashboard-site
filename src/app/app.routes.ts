import { Routes } from '@angular/router';
import { DashboardShellComponent } from './layout/dashboard-shell.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { AboutPageComponent } from './pages/about-page.component';

export const routes: Routes = [
	{
		path: '',
		component: DashboardShellComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'home' },
			{ path: 'home', component: DashboardPageComponent },
			{
				path: 'projects',
				loadComponent: () => import('./pages/projects-page.component').then((m) => m.ProjectsPageComponent)
			},
			{ path: 'about', component: AboutPageComponent },
			{
				path: 'contact',
				loadComponent: () => import('./pages/contact-page.component').then((m) => m.ContactPageComponent)
			}
		]
	},
	{ path: '**', redirectTo: '' }
];
