import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '../interfaces/token';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false); 
  loggedUser: User = {userName:'', email:''};

  constructor(private httpClient: HttpClient) { }

  public logIn( user: User ): Observable<Token>{
    console.log(user);
    return this.httpClient.post<Token>( environment.myApiURL +  '/login', {user});
  }

  googleLogin(idToken: string): Observable<Token> {
    const url: string = environment.myApiURL + '/login/google';

    return this.httpClient.post<Token>(url, {idToken});

  }

  logOut(){
    this.loggedUser = {userName:'', email:''};
    this.loggedIn.next(false);
  }


  /* TODO
  public signUp(user: User) : User{
    //let newUser: User = this.httpClient.post('http://localhost:4500/', user);
    let newUser: User = user;

    return newUser;
  }
  */
}
