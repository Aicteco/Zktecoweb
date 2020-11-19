import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { AboutusRoutingModule } from './aboutus.routing';

@NgModule({
  imports: [
    CommonModule,
    AboutusRoutingModule
  ],
  exports: [
    AboutusComponent
  ],
  declarations: [
    AboutusComponent
  ],

})
export class AboutusModule { }