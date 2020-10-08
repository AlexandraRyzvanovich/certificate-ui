import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {DialogGeneralData} from '../../shared/dialog/dialig-general/dialog-general-data';
import {DialogGeneralComponent} from '../../shared/dialog/dialig-general/dialog-general.component';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss', '../../app.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  dialogData: DialogGeneralData;

  constructor(private loginService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private dialog: MatDialog
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
