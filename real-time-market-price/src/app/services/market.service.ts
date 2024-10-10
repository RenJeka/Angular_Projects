import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private baseUrl: string = 'https://platform.fintacharts.com'; // Замените на свой базовый URL

  constructor(private http: HttpClient) { }

  getMarketPrice(): Observable<any> {
    const url = `${this.baseUrl}/api/market/price`; // Замените на правильный путь API
    return this.http.get<any>(url);
  }
}
