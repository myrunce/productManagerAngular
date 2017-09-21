import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  product: Product = new Product();

  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('ADDED PRODUCT');
    this._productService.saveProduct(this.product);
    this.product = new Product();
    this._router.navigateByUrl('/products');
  }
}
