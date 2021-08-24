import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  saveUser(user: firebase.User) {
    this.db.object(`/users/${user.uid}`).update({
      email: user.email,
      userName: user.displayName,
    });
  }

  getUser(uid: string) {
    return this.db.object<User>(`users/${uid}`).valueChanges();
  }

  get appUser() {
    return this.authService.user$.pipe(
      switchMap((firebaseUser) =>
        firebaseUser ? this.getUser(firebaseUser.uid) : of(null)
      )
    );
  }
}
