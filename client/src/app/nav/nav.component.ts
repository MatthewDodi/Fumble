import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: Boolean = false;
  username: String = '';

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    const username = this.authService.loggedIn();
    if (username) {
      this.loggedIn = true;
      this.username = username;
    }
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('Logged in successfully');
        const username = this.authService.loggedIn();
        this.username = username;
        this.loggedIn = true;
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    this.alertify.message('Logged out');
  }
}
