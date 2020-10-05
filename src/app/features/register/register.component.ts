import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {RegisterService} from '../../core/services/register.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../app.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.createForm();
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16)]
      ],
      password: ['', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16)]
      ],
      name: ['',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16)]
      ],
      surname: ['',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16)]
      ],
      repeatPassword: ['',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16)]
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
    this.registerService.register(payload);
  }
  back(): void {
    this.router.navigateByUrl('/login');
  }
}
