import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    NavComponent,
    FooterComponent
 
  ],
  exports: [
    NavbarComponent,
    NavComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
