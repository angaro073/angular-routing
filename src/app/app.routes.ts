import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { title: 'User Show', path: 'user/:id', children: [
    { title: 'User Settings', path: 'settings', component: SettingsComponent },
    { title: 'User Profile', path: 'profile', component: ProfileComponent }
  ]},
  { title: 'Home Page', path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { title: 'Error 404', path: '**', component: PageNotFoundComponent },
];
