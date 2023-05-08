import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  constructor(private itemsService: ItemsService) {}
  getCartItems() {
    this.itemsService.items;
  }
}
