import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [ButtonModule,AvatarModule, SidebarModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  user = JSON.parse(localStorage.getItem('user') || '{}')
  closeCallback(e:any): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
}
