import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'

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
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "iPhone 12",
      "productCode": "htna-123",
      "productDate": "January 20, 2022",
      "productDescription": "Some description",
      "productPrice": 799.99,
      "productRating": 4.5,
      "productImageUrl": "assets/iphone.png"
    },
    {
      "productId": 2,
      "productName": "Samsung A70",
      "productCode": "hdsh-234",
      "productDate": "March 10, 2022",
      "productDescription": "Some description",
      "productPrice": 599.99,
      "productRating": 4.2,
      "productImageUrl": "assets/samsungA70.png"
    },
    {
      "productId": 3,
      "productName": "LG Wing",
      "productCode": "hggh-445",
      "productDate": "June 20, 2022",
      "productDescription": "Some description",
      "productPrice": 649.99,
      "productRating": 3.9,
      "productImageUrl": "assets/lg-wing.png"
    },
    {
      "productId": 4,
      "productName": "iPhone 13",
      "productCode": "adfg-123",
      "productDate": "June 11, 2022",
      "productDescription": "Some description",
      "productPrice": 799.99,
      "productRating": 4.5,
      "productImageUrl": "assets/iphone.png"
    },
    {
      "productId": 5,
      "productName": "Samsung A70",
      "productCode": "hdsh-234",
      "productDate": "March 10, 2022",
      "productDescription": "Some description",
      "productPrice": 629.99,
      "productRating": 4.2,
      "productImageUrl": "assets/samsungA70.png"
    },
    {
      "productId": 6,
      "productName": "LG Wing",
      "productCode": "hggh-445",
      "productDate": "June 20, 2022",
      "productDescription": "Some description",
      "productPrice": 559.99,
      "productRating": 3.9,
      "productImageUrl": "assets/lg-wing.png"
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.listFilter = '';
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
}
