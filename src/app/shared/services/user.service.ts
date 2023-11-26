import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

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
}
