import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Router } from '@angular/router';


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
    const user = {
      "username" : this.dbDetails.controls['username'].value,
      "password" : this.dbDetails.controls['password'].value,
      "email" : this.dbDetails.controls['email'].value,
      "nombre" : this.personalDetails.controls['nombres'].value,
      "apellidos" : this.personalDetails.controls['apellidos'].value,
      "gender" : this.personalDetails.controls['gender'].value
    }
    console.log(user);
    this.router.navigate([''])

  }

  constructor(private _formBuilder: FormBuilder, private router: Router) {


  }
}
