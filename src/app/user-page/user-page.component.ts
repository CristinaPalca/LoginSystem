import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  username: string = '';

  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe( user => {
      this.username = user.name;
      this.loggedIn = (user != null);
    });

  }
  signOut(): void {
    console.log('logged out');
    this.route.navigate(['/login']);
    this.authService.signOut();
  }


}
