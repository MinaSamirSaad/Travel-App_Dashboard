import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { MainComponent } from '../../components/main/main.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SideNavComponent, MainComponent, RouterOutlet, ToastModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router){}
ngOnInit(){
  const token = localStorage.getItem('token');
  if(!token){
    console.log('no token')
    this.router.navigate(['']);
  }
}

}
