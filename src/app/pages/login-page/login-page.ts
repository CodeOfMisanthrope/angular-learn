import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';

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

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.login(this.form.value)
        .subscribe()
    }
  }
}
