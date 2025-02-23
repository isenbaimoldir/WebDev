import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Electronics', 'Clothing', 'Books', 'Furniture'];
  products = {
    Electronics: [
      { name: 'Laptop', likes: 0 },
      { name: 'Smartphone', likes: 0 },
      { name: 'Tablet', likes: 0 },
      { name: 'Smartwatch', likes: 0 },
      { name: 'Camera', likes: 0 },
    ],
    Clothing: [
      { name: 'T-shirt', likes: 0 },
      { name: 'Jeans', likes: 0 },
      { name: 'Jacket', likes: 0 },
      { name: 'Sneakers', likes: 0 },
      { name: 'Hat', likes: 0 },
    ],
    Books: [
      { name: 'Mystery Novel', likes: 0 },
      { name: 'Science Fiction', likes: 0 },
      { name: 'Biography', likes: 0 },
      { name: 'Self-help', likes: 0 },
      { name: 'Cookbook', likes: 0 },
    ],
    Furniture: [
      { name: 'Sofa', likes: 0 },
      { name: 'Table', likes: 0 },
      { name: 'Chair', likes: 0 },
      { name: 'Bookshelf', likes: 0 },
      { name: 'Bed', likes: 0 },
    ]
  };

  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
