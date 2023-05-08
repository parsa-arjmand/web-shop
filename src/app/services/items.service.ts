import { Injectable } from '@angular/core';
import { Card } from '../Card';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items?: Card[];
  itemsChanged = new Subject<Card>();
  constructor() {}
}
