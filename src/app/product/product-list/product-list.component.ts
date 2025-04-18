import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: false
})
export class ProductListComponent implements OnInit {
  
products: Product[] = [];

 constructor(private productService: ProductService){}

 // The list of product is loaded OnInit
  ngOnInit(): void {

    // Get products async from the service
    this.productService.getProducts().subscribe(prods => {
      this.products = prods;
    });
  }

}
