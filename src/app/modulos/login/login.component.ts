import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private logSer: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null , Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log('envoando', email, password);
    this.logSer.logarUsuario(email, password);
    // this.logSer.registrarUsuario(email, password);
    console.log('envoando', email, password);
  }

}
