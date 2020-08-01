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
  user: SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe( user => {
      if (user != null){
        this.user = user;
        this.username = user.name;
        this.loggedIn = (user != null);
      }
    }, err => {
      console.log('from user page');
      console.log(err);
    });

  }
  signOut(): void {
    console.log('logged out');
    this.route.navigate(['/login']);
    this.authService.signOut();
  }


}
