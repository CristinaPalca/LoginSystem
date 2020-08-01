import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  username: string = 'random';

  user: SocialUser;
  loggedIn: boolean = true;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe( user => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
  signOut(): void {
    console.log('logged out');
    this.authService.signOut();
  }


}
