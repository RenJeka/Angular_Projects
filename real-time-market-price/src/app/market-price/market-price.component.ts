import {Component, OnInit} from '@angular/core';
import {MarketService} from "../services/market.service";

@Component({
  selector: 'app-market-price',
  standalone: true,
  imports: [],
  templateUrl: './market-price.component.html',
  styleUrl: './market-price.component.css'
})
export class MarketPriceComponent implements  OnInit{
  marketPrice: any;
  currencies: {id: number, name: string}[] = [{id: 1, name: 'BTC/USD'}, {id: 2, name: 'EUR/CAD'}];

  constructor(private marketService: MarketService) { }

  ngOnInit(): void {
    this.marketService.getMarketPrice().subscribe(data => {
      this.marketPrice = data;
    });
  }

  subscribeCurrency(currencyId: string) {
    console.log(`subscribe with currency ID: ${currencyId}`);
  }
}
