import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authService.user$.subscribe((fireUser) => {
      if (fireUser) this.userService.saveUser(fireUser);

      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

      if (returnUrl) this.router.navigate([returnUrl]);
      else if (this.router.url === '/login') this.router.navigate(['/']);
    });
  }
}
