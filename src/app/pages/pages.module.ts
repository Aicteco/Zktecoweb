import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { PagesRoutesModule } from './pages.routing';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    SharedModule,
    ComponentsModule,
    RouterModule,
    PagesRoutesModule
  ],
  declarations: [
    PagesComponent,
  ],

})

export class PagesModule {}
