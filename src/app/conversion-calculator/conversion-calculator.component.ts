import { Component, OnInit } from '@angular/core';
import {ConversionCalculatorServiceService} from '../services/conversion-calculator-service.service';

@Component({
  selector: 'app-conversion-calculator',
  templateUrl: './conversion-calculator.component.html',
  styleUrls: ['./conversion-calculator.component.css']
})
export class ConversionCalculatorComponent implements OnInit {

  //devise a convertir
  currencyToConvert;

  //devise qui convertie
  currencyConverting;

  constructor(private converstionCalculatorService: ConversionCalculatorServiceService) { }

  ngOnInit() {

  }

  calculateConversion(amount){

  }

}
