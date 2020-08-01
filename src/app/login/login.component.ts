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
  submitFailed = false;

  constructor(private authService: SocialAuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe( user => {
      if (user != null){
        this.router.navigate(['/user']);
      }else{
       // this.submitFailed = true;
      }
    }, err => { console.log(err)});
  }

  onSubmit(){
    console.log(this.userName + '' + this.password);
   // this.submitFailed = true;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
