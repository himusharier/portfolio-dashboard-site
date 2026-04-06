import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-dashboard-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss'
})
export class DashboardShellComponent {
  sidebarOpen = false;

  readonly navItems: NavItem[] = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'work', label: 'Projects', route: '/projects' },
    { icon: 'person', label: 'About', route: '/about' },
    { icon: 'mail', label: 'Contact', route: '/contact' }
  ];

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebarOnMobile(): void {
    this.sidebarOpen = false;
  }
}
