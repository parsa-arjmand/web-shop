import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Card } from '../Card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  productItems!: Card[];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getItems().subscribe((result) => {
      this.productItems = result;
      console.log(this.productItems);
    });
  }
}
