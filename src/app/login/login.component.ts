import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  submitted = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userName + '' + this.password);
    this.submitted = true;
  }

}
