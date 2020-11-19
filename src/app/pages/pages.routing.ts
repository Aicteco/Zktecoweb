import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
  
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'aboutus',
        loadChildren: () => import('../pages/aboutus/aboutus.module').then(m => m.AboutusModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then(m => m.ContactModule),
      },
    ]
   
  }];
  
  @NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutesModule { }
