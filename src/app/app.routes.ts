import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { UsersTapleComponent } from './components/users-taple/users-taple.component';
import { TripsTapleComponent } from './components/trips-taple/trips-taple.component';
import { CountriesTapleComponent } from './components/countries-taple/countries-taple.component';
import { HotelsTapleComponent } from './components/hotels-taple/hotels-taple.component';

export const routes: Routes = [
  {path: 'home', component:HomeComponent, pathMatch: 'prefix',children: [
    {path: '', component: MainComponent, },
    {path: 'users', component: UsersTapleComponent},
    {path: 'trips', component: TripsTapleComponent},
    {path: 'countries', component: CountriesTapleComponent},
    {path: 'hotels', component: HotelsTapleComponent},
  ]},
  {path: '', component: LoginComponent}
];
