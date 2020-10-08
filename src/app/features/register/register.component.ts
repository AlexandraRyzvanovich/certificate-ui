import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../core/services/register.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {DialogCartComponent} from '../card/card-page/dialog-cart/dialog-cart.component';
import {DialogGeneralData} from '../../shared/dialog/dialig-general/dialog-general-data';
import {DialogGeneralComponent} from '../../shared/dialog/dialig-general/dialog-general.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../app.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  dialogData: DialogGeneralData;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog) {
    this.createForm();
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)]
      ],
      password: ['', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)]
      ],
      name: ['',
        [Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)]
      ],
      surname: ['',
        [Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)]
      ],
      repeatPassword: ['',
        [Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50)]
      ],
    });
  }

  // tslint:disable-next-line:typedef
  get _email() {
    return this.registerForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get _password() {
    return this.registerForm.get('password');
  }

  get _name() {
    return this.registerForm.get('name');
  }

  get _surname() {
    return this.registerForm.get('surname');
  }

  // tslint:disable-next-line:typedef
  get _repeatPassword() {
    return this.registerForm.get('repeatPassword');
  }

  register(): void {
    const payload = {
      email: this._email.value,
      password: this._password.value,
      name: this._name.value,
      surname: this._surname.value,
    };
    if (this._email.invalid || this._password.invalid || this._surname.invalid || this._name.invalid) {
      return;
    }
    this.registerService.register(payload).subscribe(resp => {
      this.dialogData = {title: 'Registration', message: 'You have successfully signed up. Please sign in'};
      this.openDialog(this.dialogData);
      this.router.navigate(['/login']);
    }, (error: HttpErrorResponse) => {
          if (error.status === 409 ) {
            this.dialogData = {title: 'Registration', message: 'User with such email already exists.'};
            this.openDialog(this.dialogData);
          }
          if (error.status === 400) {
            this.dialogData = {title: 'Registration', message: ' Please, contact support center.'};
            this.openDialog(this.dialogData);
          }
    });
  }

  back(): void {
    this.router.navigateByUrl('/login');
  }
  // openSuccessDialog(): void {
  //   this.dialog.open(RegisterDialogComponent);
  //   this.router.navigateByUrl('/login');
  // }
  openDialog(dialogSuccessData: DialogGeneralData): void {
    this.dialog.open(DialogGeneralComponent, {
      width: '500px',
      data: dialogSuccessData
    });
  }
}
