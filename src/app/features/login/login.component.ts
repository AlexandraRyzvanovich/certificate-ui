import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss', '../../app.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: AuthService,
              private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  // tslint:disable-next-line:typedef
  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16)]
      ],
      password: ['', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16)]
      ]
    });
  }

  // tslint:disable-next-line:typedef
  get _email() {
    return this.loginForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get _password(){
    return this.loginForm.get('password');
  }

  // tslint:disable-next-line:typedef
  Login() {
    if (this._email.invalid || this._password.invalid) {
      return;
    }
    this.loginService.login(this._email.value, this._password.value);
  }

  ngOnInit(): void {

  }

}
