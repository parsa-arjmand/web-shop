import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from 'src/app/Card';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  constructor(private productService: ProductService) {}
  @Input() id!: number;
  @Input() title!: string;
  @Input() desc!: string;
  @Input() price!: number;
  @Input() img?: string;
  @Input() category!: string;
  readMore!: boolean;
  openModal = false;
  //temp
  cartItems!: Card[];

  //CHECK IF THIS CODE IS OPTIMIZED
  ngOnInit() {
    this.productService.getCartItems().subscribe((results) => {
      this.cartItems = results;
      console.log('cart', this.cartItems);
    });
  }
  addToCart() {
    //show added modal

    this.openModal = true;
    const newItem = {
      id: this.id,
      title: this.title,
      price: this.price,
      category: this.category,
      description: this.desc,
      image: this.img,
    };

    //updating cart if the item already exists

    this.cartItems.forEach((cartItem) => {
      if (newItem.id === cartItem.id) {
        newItem.price += cartItem.price;
        this.productService
          .updateCartItem(newItem)
          .subscribe(() => console.log('item modified'));
      }
    });
    console.log('here', this.cartItems);
    this.productService
      .postItems(newItem)
      .subscribe(() => console.log('item added'));
  }
}
