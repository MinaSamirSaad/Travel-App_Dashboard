import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SideNavComponent, SpinnerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private user:UserService, private router:Router) { }
  loading = false;
  logout(){
    this.loading = true;
    this.user.logout().subscribe({
      next: () => {
        localStorage.clear();
        this.router.navigate(['']);
      },
      error: (err) => {
        this.loading = false;
        console.log(err)
      }
    });
  }

}
