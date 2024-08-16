import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { selectIsAuthenticated } from '../../../store/selectors/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToAccount() {
    this.router.navigate(['/account']);
  }
}
