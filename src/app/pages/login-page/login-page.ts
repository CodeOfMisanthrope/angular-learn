import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {from, map, skip, take} from 'rxjs';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  authService = inject(AuthService);

  form = new FormGroup({
    username: new FormControl("", {
      validators: Validators.required,
      nonNullable: true
    }),
    password: new FormControl("", {
      validators: Validators.required,
      nonNullable: true
    }),
  });

  constructor() {
    from([1,2,3,4,5,6,7,8,9])
      .pipe(
        map(val => {
          return val * 2;
        }),
        skip(2),
        take(5),
      )
      .subscribe(val => {
        console.log(val);
      })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.login(this.form.value)
        .subscribe()
    }
  }
}
