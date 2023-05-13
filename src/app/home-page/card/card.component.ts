import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  constructor(private productService: ProductService) {}
  @Input() id!: number;
  @Input() title!: string;
  @Input() desc!: string;
  @Input() price!: number;
  @Input() img?: string;
  @Input() category!: string;
  readMore!: boolean;
  openModal = false;
  addToCart() {
    //show added modal
    this.openModal = true;
    const newItem = {
      id: this.id,
      title: this.title,
      price: this.price,
      category: this.category,
      description: this.desc,
      imagePath: this.img,
    };
    this.productService
      .postItems(newItem)
      .subscribe(() => console.log('item added'));
  }
}
