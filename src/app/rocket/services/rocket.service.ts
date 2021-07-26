import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rocket } from '../models/rocket';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  private _rocket : BehaviorSubject<Rocket>;
  private _displayData : BehaviorSubject<boolean>;

  private precedingDictionaryDetails = {
    "stage" : "rocket",
    "engine" : "stage"
  };

  private dataStore : {
    rocket: Rocket;
    displayData : boolean
  }

  constructor(private http : HttpClient) { 
    this.dataStore = {rocket: new Rocket,displayData:false};
    this._rocket = new BehaviorSubject<Rocket>(new Rocket);
    this._displayData = new BehaviorSubject<boolean>(false);
  }

  get rocket(): Observable<Rocket>{
    return this._rocket.asObservable();
  }

  get displayData(): Observable<boolean>{
    return this._displayData.asObservable();
  }

  compositePropertyPresent(searchString:string){
    let compositeProperties = ['stage','engine'];
    for(let index=0;index<compositeProperties.length;index++){
      let currentComposite = compositeProperties[index];
      if(searchString.includes(currentComposite)){
        return true;
      }
    }
    return false;
  }
  loadRocketDetails(searchString : string){
    let rocketUrl = 'http://localhost:3000/rocket';
    let parsedQuery = searchString.split('/');
    let compositeProperties = ['stage','engine'];
    let previousComposite = true;
    let previousQuery = false; 
    let queryAPI = true;
    let rocketName = parsedQuery[0];
    rocketUrl = `${rocketUrl}/${rocketName}`;
    for(let index=1;index <parsedQuery.length;index++){
      let currentString = parsedQuery[index];
      if(currentString.length == 0){
        continue
      }
      if(compositeProperties.includes(currentString.toLowerCase())){
        rocketUrl = `${rocketUrl}/${currentString}`;
         previousComposite = true;
        previousQuery = false;
      }
      else if(this.compositePropertyPresent(currentString.toLowerCase()) && previousComposite){
        previousComposite = true;
        previousQuery = false;
        rocketUrl = `${rocketUrl}/${currentString.substring(0,currentString.length-1)}/${currentString}`;
      }else if(!compositeProperties.includes(currentString.toLowerCase()) && previousComposite){
        rocketUrl = `${rocketUrl}?property=${currentString}`;
        previousQuery = true;
        previousComposite = false;

      }else{
        queryAPI = false;
        break;
      }
    }
    if(queryAPI){
      return this.http.get<Rocket>(rocketUrl)
      .subscribe(data => {
        if(data){
          this.dataStore.rocket = data;

          this._rocket.next(Object.assign({},this.dataStore).rocket);
          this.dataStore.displayData =true;
          this._displayData.next(this.dataStore.displayData);
        }
      },error =>{
        this.dataStore.rocket = new Rocket;
        this._rocket.next(Object.assign({},this.dataStore).rocket);
        this.dataStore.displayData = false;
        this._displayData.next(this.dataStore.displayData);
      });
    }else{
      let emptyRocket = new Rocket;
      this.dataStore.rocket = emptyRocket;
      this._rocket.next(Object.assign({},this.dataStore).rocket);
      this.dataStore.displayData = false;
      this._displayData.next(this.dataStore.displayData);

      return emptyRocket;
    }
  }

}
