import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productTitle: string = "Product List";
  imageWidth: number = 100;
  showImage: boolean = false;

  // Private property
  private _listFilter = "";

  // Getter
  get listFilter(): string {
    return this._listFilter;
  }

  // Setter
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  
  // Filtered Products
  filteredProducts: IProduct[] = [];
  // Products Array
  products: IProduct[] = [];

  constructor( private productService: ProductService) {
    
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  // ToggleImage
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // // Perform Product Filter
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.productTitle = 'Product List: ' + message;
  }

}
