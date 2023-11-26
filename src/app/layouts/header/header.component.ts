import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { BreakpointObserver } from '@angular/cdk/layout';
import {  Component,  ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Token } from 'src/app/shared/interfaces/token';

import { LoginService } from 'src/app/shared/services/login.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;
  loggedIn: Boolean = this.loginService.loggedIn.value;

  constructor(private socialAuth: SocialAuthService,
    private loginService: LoginService,
    private observer: BreakpointObserver,
    private tokenService: TokenService,
    private router: Router) {

      this.socialAuth.authState.subscribe((user: SocialUser) => {
        console.log(user);

        if(user) {
          this.loginService.googleLogin(user.idToken).subscribe({
            next: (response: Token) => {
              //Save Token
              console.log('Success');
              this.tokenService.save(response);

              //Redirect
              this.loggedIn = true; //TMP
              this.loginService.loggedIn.next(true);

              this.router.navigate(['account']);
            },
            error: () => {
              alert('Login Failed');
            }
          })
        }
                
      });
      

    }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  logOut(){
    this.loginService.logOut();
    this.loggedIn = false; //TMP
    this.tokenService.remove();
    this.router.navigate(['login']); 
  }

  

}
