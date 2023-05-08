import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../Card';
import { ItemsService } from './items.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com';
  private backEnd = 'http://localhost:3000/cart';
  constructor(private http: HttpClient, private itemsService: ItemsService) {}
  getItems(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/products`);
  }
  postItems(item: Card): Observable<Card> {
    this.itemsService.items?.push(item);
    return this.http.post<Card>(this.backEnd, item, httpOptions);
  }
}
