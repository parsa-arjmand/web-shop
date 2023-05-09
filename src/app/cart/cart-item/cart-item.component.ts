import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  constructor(private productService: ProductService) {}
  @Input() id!: number;
  @Input() img?: string;
  @Input() cat!: string;
  @Input() title!: string;
  @Input() price!: number;
  @Output() deletedItemId = new EventEmitter<number>();
  onDelete() {
    this.deletedItemId.emit(this.id);
  }
}
