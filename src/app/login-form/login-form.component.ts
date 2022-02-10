import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  ngOnInit(): void {
  }

  onLogin(formValue: any) {
    console.log(formValue);
    alert(JSON.stringify(formValue));
  }

}
