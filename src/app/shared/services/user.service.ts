import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Token } from '../interfaces/token';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API__URL = environment.myApiURL + '/users';
  constructor(private httpClient: HttpClient, private tokenService: TokenService) { 

  }

  createUser(User: User) : Observable<any>
  {
    return this.httpClient.post<User>(this.API__URL, User);
  }

  getUser(userName: string) : Observable<User>{
    let api_url = this.API__URL + '/' + userName;
    console.log(userName);
    console.log(api_url);
    return this.httpClient.get<User>(api_url);
  }

  getProfile() : Observable<User>{
    let api_url = environment.myApiURL + '/profile';
    let token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+ token
    });

    return this.httpClient.get<User>(api_url, {headers});
  }

  editUser(UID: string, user: User) : Observable<any> {
    let api_url = this.API__URL + '/' + UID;
    let token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+ token
    });

    return this.httpClient.patch<User>(api_url, user,{headers});
  }
}
