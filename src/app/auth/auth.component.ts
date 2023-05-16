import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  login: boolean = true;
  username: string = '';
  password?: string;
  onSwitchMode() {
    this.login = !this.login;
  }
  onSubmit(form: NgForm) {
    console.log(form);
    form.reset();
  }
}
