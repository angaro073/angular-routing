import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <main>
      <div>
        <ul>
          <li>
            <a class="pill" routerLink="home" routerLinkActive="active-pill">HomeComponent</a>
          </li>
          <li>
            <a class="pill" routerLink="user/{{ user_id }}/settings" routerLinkActive="active-pill">SettingsComponent</a>
          </li>
          <li>
            <a  class="pill" routerLink="user/{{ user_id }}/profile" routerLinkActive="active-pill">ProfileComponent</a>
          </li>
        </ul>
      </div>
      <div>
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  user_id = 1;
}
