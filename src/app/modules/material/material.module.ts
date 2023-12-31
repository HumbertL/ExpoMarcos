import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import {MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCard, MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatDialogModule} from '@angular/material/dialog'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
