import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  id: number;
  constructor(private _productService: ProductService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.id = Number(params.get('id'));
    });
   }

  ngOnInit() {
   this.product = this._productService.getProductByIndex(this.id);
  }

  update() {
    this._productService.updateProduct(this.id, this.product);
    this._router.navigateByUrl('/products');
  }
}
