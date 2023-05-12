import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Card } from '../Card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  productItems!: Card[];
  loading: boolean = true;
  error = false;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getItems().subscribe({
      next: (result) => {
        this.productItems = result;
        this.loading = false;
        console.log(this.loading);
        console.log(this.productItems);
      },
      error: (err) => (this.error = true),
    });
  }
}
