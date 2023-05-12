import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
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
