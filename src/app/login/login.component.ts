import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Observable} from 'rxjs';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss', '../app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor( private authService: LoginService) { }
  Login(){
    console.log('you are logging in');
    this.authService.login(this.username, this.password);
  }

    ngOnInit(): void {
  }
}
