import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollingListServiceService {

  currencyToConvertTemp = new BehaviorSubject(0);
  currencyConvertingTemps = new BehaviorSubject(0);

  currencyToConvert = this.currencyToConvertTemp.asObservable();
  currencyConverting = this.currencyConvertingTemps.asObservable();

  constructor() { }

  changeCurrencies(currencyToConvert, currencyConverting){
    this.currencyToConvertTemp.next(currencyToConvert);
    this.currencyConvertingTemps.next(currencyConverting);
  }
}
