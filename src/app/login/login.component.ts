import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss', '../app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {
  user: { password: string; email: string } = {
    email: '',
    password: ''
  };

  constructor( private authService: LoginService) { }
  // tslint:disable-next-line:typedef
  Login(){
    console.log('you are logging in');
    this.authService.login(this.user.email, this.user.password);
  }

    ngOnInit(): void {
    this.Login();
  }
}
