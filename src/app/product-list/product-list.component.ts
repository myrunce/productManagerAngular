import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this.products = this._productService.getAllProducts();
    console.log(this.products);
  }

  delete(i) {
    this._productService.deleteProductByIndex(i);
  }

  edit(i) {
    this._router.navigateByUrl('/products/edit/' + i);
  }
}
