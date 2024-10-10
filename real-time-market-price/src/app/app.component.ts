import { Component } from '@angular/core';
import {MarketPriceComponent} from "./market-price/market-price.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MarketPriceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real-time-market-price';
}
