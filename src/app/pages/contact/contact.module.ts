import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent
  ],

})
export class ContactModule { }