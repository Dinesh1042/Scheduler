import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../shared/models/user';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user$: Observable<User | null>;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.user$ = this.userService.appUser;
  }

  logout() {
    this.authService.logout();
  }
}
