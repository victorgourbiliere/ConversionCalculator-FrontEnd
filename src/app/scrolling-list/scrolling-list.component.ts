import { Component, OnInit } from '@angular/core';
import {ScrollingListServiceService} from '../services/scrolling-list-service.service';

@Component({
  selector: 'app-scrolling-list',
  templateUrl: './scrolling-list.component.html',
  styleUrls: ['./scrolling-list.component.css']
})
export class ScrollingListComponent implements OnInit {

  //devise a convertir
  currencyToConvert;
  //devise qui convertie
  currencyConverting;

  constructor(private scrollingListService: ScrollingListServiceService) { }

  ngOnInit() {
    this.scrollingListService.currencyToConvert.subscribe(currentCurrencyToConvert => this.currencyToConvert = currentCurrencyToConvert)
    this.scrollingListService.currencyConverting.subscribe(currentCurrencyConverting => this.currencyConverting = currentCurrencyConverting)
  }

}
