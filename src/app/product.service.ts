import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products: Product[] = [];
  constructor() { }

  getAllProducts() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  getProductByIndex(index) {
    return this.products[index];
  }

  deleteProductByIndex(index) {
    this.products.splice(index, 1);
  }

  updateProduct(index, product) {
    this.products[index] = product;
  }
}
