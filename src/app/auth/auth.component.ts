import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  loginMode: boolean = true;
  loginStatus = false;
  signupStatus = false;
  constructor(private authService: AuthService) {}
  onSwitchMode() {
    this.loginMode = !this.loginMode;
  }
  onSubmit(form: NgForm) {
    const user = {
      username: form.value.username,
      password: form.value.password,
    };
    if (!this.loginMode) {
      this.signupStatus = false;
      // SIGNUP
      this.authService.signup(user).subscribe(() => {
        this.signupStatus = true;

        form.reset();
      });
    }
    // else {
    //   //LOGIN
    //   this.loginStatus = false;
    //   this.authService.signin().subscribe((resp) => {
    //     const foundUser = resp.find(
    //       (dbUser) =>
    //         dbUser.username === user.username &&
    //         user.password === dbUser.password
    //     );
    //     if (foundUser != undefined) this.loginStatus = true;
    //   });
    // }
  }
}
