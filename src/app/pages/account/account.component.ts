import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/interfaces/user';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AccountDialogComponent } from './account-dialog/account-dialog.component';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/shared/services/token.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  edit:boolean = false;
  editThis: boolean = false;
  currentUser: User ={ 
    email: '', 
    password: '', 
    name: '', 
    userName: '' ,
    gender: '', 
  };  


  uid: string = '';

  dbDetails = this._formBuilder.group({
    userName: ['', Validators.required],
    name: ['', Validators.required],
  });

  dbDetails_secondForm = this._formBuilder.group({
    email: ['', Validators.required]
  });

  constructor(private tokenService: TokenService, private loginService: LoginService, private userService: UserService,
    public dialog: MatDialog, private _formBuilder: FormBuilder)
  {}
  ngOnInit(): void {
    this.userService.getProfile()
    .subscribe({next: (response) => {
      this.currentUser = response;
      console.log(response);
      console.log(this.currentUser.UUID);

      this.dbDetails.patchValue({
        userName: response.userName,
        name: response.name
      });

      this.dbDetails_secondForm.patchValue({
        email: response.email
      });
      
    },
    error: () => {
      console.log('Couldnt fetch user details');
      alert('Couldnt fetch user details');
    }
  },)

  }
  
  openDialog() {
    const dialogRef = this.dialog.open(AccountDialogComponent,{
      data: {editThis: this.editThis}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.editThis = !result;
      console.log(this.editThis);
    });
  }

  toogleEdit()
  {
    this.edit = !this.edit;
  }

  updateUserDebug()
  {
    const userToUpload: User
    = {
      userName : this.dbDetails.controls['userName'].value!.toString(),
      email : this.dbDetails_secondForm.controls['email'].value!.toString(),
      name : this.dbDetails.controls['name'].value!.toString(),
    };
    console.log(userToUpload);
    console.log(this.dbDetails.controls['userName'].value!.toString());
    console.log(this.dbDetails_secondForm.controls['email'].value!.toString())
    
  }

  uploadUser()
  {
    const userToUpload: User
    = {
      userName : this.dbDetails.controls['userName'].value!.toString(),
      email : this.dbDetails_secondForm.controls['email'].value!.toString(),
      name : this.dbDetails.controls['name'].value!.toString(),
    };
    const token = this.tokenService.get();
    console.log(token);
    this.userService.editUser(this.currentUser.UUID!).subscribe({next: (response) => { //////FIXXXXXX
      console.log(response);
      
    },
    error: () => {
      console.log('Couldnt fetch user details');
      alert('Couldnt fetch user details');
      
    }
  },);
  }
}
