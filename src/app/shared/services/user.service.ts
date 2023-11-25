import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API__URL = environment.myApiURL + 'users';
  constructor(private httpClient: HttpClient) { 

  }

  createUser(User: User)
  {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(User),
    };
  }
}
