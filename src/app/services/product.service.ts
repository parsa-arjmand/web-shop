import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../Card';

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
  constructor(private http: HttpClient) {}
  getItems(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/products`);
  }
  postItems(item: Card): Observable<Card> {
    return this.http.post<Card>(this.backEnd, item, httpOptions);
  }
  getCartItems(): Observable<Card[]> {
    return this.http.get<Card[]>(this.backEnd);
  }
  deleteItems(itemId: number): Observable<Card> {
    return this.http.delete<Card>(`${this.backEnd}/${itemId}`);
  }
  updateCartItem(item: Card): Observable<Card> {
    return this.http.put<Card>(`${this.backEnd}/${item.id}`, item);
  }
}
