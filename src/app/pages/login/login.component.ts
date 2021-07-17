import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginService } from '../../../providers/auth/login.service';
import {Router} from "@angular/router";
import { ChangeDetectorRef } from '@angular/core';
import { NbAuthSocialLink } from '../../../../node_modules/@nebular/auth/auth.options';



import * as ɵngcc0 from '@angular/core';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  error: string;
  showMessages: any;
  errors:string;
  submitted: boolean;
  messages: string[];
  rememberMe: boolean;
  socialLinks: NbAuthSocialLink[];

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    console.log('login');
  }

  ngOnDestroy() {
  }

  public login(): void {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(response => {
      if (response.data.token) {
        localStorage.setItem('accessToken', response.data.token);
        if (localStorage.getItem('accessToken')) {
          this.redirectInto();
        }
      }
    }, error => {
      this.error = error;
    });
  }

  redirectInto(): void {
    this.router.navigate(['dashboard']);
  }

}
