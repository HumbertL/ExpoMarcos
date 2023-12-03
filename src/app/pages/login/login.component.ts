import { Component } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user'
import { LoginService } from 'src/app/shared/services/login.service';
import { TokenService } from 'src/app/shared/services/token.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  username: string = '';

 
  constructor(private loginService: LoginService, private router: Router, private tokenService: TokenService) {}

  logIn(){

    let user: User = {userName: '' ,email:'', password: ''};

    const us: User = {userName: this.username, email: this.email, password: this.password};

    this.loginService.logIn(us).subscribe({
      next: (response) =>{
            console.log(response);
            
            this.tokenService.save(response);
            this.loginService.loggedIn.next(true);
            this.loginService.loggedUser = us;
            console.log(this.loginService.loggedIn);
            this.router.navigate(['catalog']);
      },
      error: () => {
        console.log('User not logged, error happened');
        alert('User not logged, error happened');
      }
    });
    
  }
}
