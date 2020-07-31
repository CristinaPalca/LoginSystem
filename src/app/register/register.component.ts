import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  repeatedPassword = '';
  isRegistered = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRegister(registerForm){
    console.log(this.email);
    console.log(this.password);
    console.log(this.repeatedPassword);
    this.isRegistered = true;
    registerForm.reset();
  }
  match(){
    return this.password === this.repeatedPassword;
  }
}
