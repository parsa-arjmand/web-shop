import { Component, OnInit } from '@angular/core';
import { Card } from '../Card';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems!: Card[];
  error: boolean = false;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getCartItems().subscribe({
      next: (result) => {
        this.cartItems = result;
      },
      error: (err) => (this.error = true),
    });
  }
  deleteCartItem(itemId: number) {
    this.productService.deleteItems(itemId).subscribe(() => {
      this.cartItems = this.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
    });
  }
}
