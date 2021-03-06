import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
//  {path:'demo',loadChildren: () => import('./demo/demo.module').then(m =>m.DemoModule)},
//  {path:'contactmanager',loadChildren: () => import('./contactmanager/contactmanager.module').then(m =>m.ContactmanagerModule)},
 {path:'rocket',loadChildren: () => import('./rocket/rocket.module').then(m =>m.RocketModule)},

  {path : '**' , redirectTo: 'rocket'}
]; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
