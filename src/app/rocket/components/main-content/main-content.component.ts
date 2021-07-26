import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '../../models/rocket';
import { RocketService } from '../../services/rocket.service';
import { RemovePropertyDialogComponent } from '../removeproperty-dialog/removeproperty-dialog.component';
import {MatDialog,MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  displayRocket : boolean = false;
  rocket: Rocket = new Rocket;
  
  deleteProperty(){
    let dialogRef = this.dialog.open(RemovePropertyDialogComponent,{
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result =>{
    })
  }

  
  getColor(propertyValue : String){
    if(Number(propertyValue) > 0){
      return 'green';
    }
    return 'black';
  }

  queryRocketDetails(event:any){
    this.rocketService.loadRocketDetails(event.target.value);
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private rocketService : RocketService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.rocketService.rocket.subscribe(data =>{
      this.rocket = data;
    })
    this.rocketService.displayData.subscribe(data =>{
      this.displayRocket = data;
    })
  }

}
