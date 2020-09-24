import {Component, OnInit} from '@angular/core';
import {User} from '../module/user';
import {RegisterService} from '../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../app.component.scss']
})
export class RegisterComponent implements OnInit {
  user: { email: string; name: string; surname: string; password: string; repeatPassword: string } = {
    email: '',
    name: '',
    surname: '',
    password: '',
    repeatPassword: ''

  };

  constructor(private registerService: RegisterService) {
  }

  // tslint:disable-next-line:typedef
  Register() {
    this.registerService.register(this.user.email, this.user.name, this.user.surname, this.user.password, this.user.repeatPassword);
  }

  ngOnInit(): void {
    this.Register();
  }

}
