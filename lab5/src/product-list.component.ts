import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: { name: string, likes: number }[] = [];

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}