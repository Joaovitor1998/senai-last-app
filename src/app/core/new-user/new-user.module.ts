import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
import { NewUserComponent } from './new-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    NewUserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class NewUserModule { }
