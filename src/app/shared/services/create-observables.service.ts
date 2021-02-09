import { Injectable } from '@angular/core';
import { OBSERVABLES } from 'src/app/shared/constant/service.constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateObservablesService {

    
  constructor() {
    this.createObservable();
   }

   createObservable(){
     for(let i in OBSERVABLES){
      OBSERVABLES[i] = new BehaviorSubject(null);
     }
    
   }

  getSessionMain(name) {
    return name.asObservable();
  }

  setSessionMain(name, val:any = '') {
    OBSERVABLES[name].next(val);
  }
}
