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
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
        this.route.navigate(['/login']);
      }
    }, err => {
      console.log('from user page');
      console.log(err);
      this.loggedIn = false;
      this.route.navigate(['/login']);
    });

  }
  signOut(): void {
    console.log('logged out');
    this.authService.signOut();
  }


}
