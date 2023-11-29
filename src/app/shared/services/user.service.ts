import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API__URL = environment.myApiURL + '/users';
  constructor(private httpClient: HttpClient) { 

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

  editUser(token: string, UID: string) : Observable<User> {
    let api_url = this.API__URL + '/' + UID;
    return this.httpClient.patch<User>(api_url, {headers: {'authorization': token}});
  }
}
