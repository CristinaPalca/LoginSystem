import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  submitted = false;

  constructor(private authService: SocialAuthService,
              private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.userName + '' + this.password);
    this.submitted = true;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['/user']);
  }

}
