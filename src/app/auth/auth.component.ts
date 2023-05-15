import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  login: boolean = true;
  username: string = '';
  shortUser = true;
  password?: string;
  onSwitchMode() {
    this.login = !this.login;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
  checkInputLength() {
    if (this.username.length > 8) this.shortUser = false;
    console.log(this.username);
  }
}
