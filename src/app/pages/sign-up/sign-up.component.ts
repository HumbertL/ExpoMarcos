import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  personalDetails = this._formBuilder.group({
    nombres: ['', Validators.required],
    apellidos:['', Validators.required],
    gender:['', Validators.required]
  });
  dbDetails = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required]
  });

  
  isLinear = true;

  debugUploadCount(){
    console.log('Personal details' + this.personalDetails.controls['nombres']);
    console.log('\n');
    console.log('db details ' + this.dbDetails.controls['email'].value);
    const stringname = `${this.personalDetails.controls['nombres'].value} ${this.personalDetails.controls['apellidos'].value} `
    const user = {
      "username" : this.dbDetails.controls['username'].value,
      "password" : this.dbDetails.controls['password'].value,
      "email" : this.dbDetails.controls['email'].value,
      "nombre" : stringname,
      "gender" : this.personalDetails.controls['gender'].value
    }
    console.log(user);
    this.router.navigate([''])

  }

  uploadAccount(){
    const stringname = `${this.personalDetails.controls['nombres'].value} ${this.personalDetails.controls['apellidos'].value} `
    const userToUpload: User
    = {
      userName : this.dbDetails.controls['username'].value!.toString(),
      password : this.dbDetails.controls['password'].value!.toString(),
      email : this.dbDetails.controls['email'].value!.toString(),
      name : stringname,
      gender : this.personalDetails.controls['gender'].value?.toString(), 
      role: 'user'
    };
    this.userService.createUser(userToUpload).subscribe({next: value => {
      console.log(value);
      this.router.navigate(['']);
    }, error: (mistake) => {
      alert('Idk what the fuck happened but something happened');
      console.log(mistake);
    }})
  }

  constructor(private _formBuilder: FormBuilder, private router: Router,
    private userService: UserService) {


  }
}
