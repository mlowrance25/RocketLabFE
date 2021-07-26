import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes,RouterModule} from '@angular/router';
import { MaterialModule } from '../shared/material.module';

import { RocketAppComponent } from './rocket-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RocketService } from './services/rocket.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RemovePropertyDialogComponent } from './components/removeproperty-dialog/removeproperty-dialog.component';

const routes: Routes = [
  {path:'',component: RocketAppComponent,
    children: [
      {path:'', component:MainContentComponent},
    ]},
 
 ]; 

@NgModule({
  declarations: [
    RocketAppComponent,
    MainContentComponent,
    ToolbarComponent,
    RemovePropertyDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    RocketService,
  ]
})
export class RocketModule { }
