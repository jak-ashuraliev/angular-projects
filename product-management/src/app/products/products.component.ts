import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productTitle: string = "Product List";
  imageWidth: number = 100;
  products: any[] = [
    {
      "productId": 1,
      "productName": "iPhone 12",
      "productCode": "htna-123",
      "productDate": "January 20, 2022",
      "productDescription": "Some description",
      "productPrice": 39.99,
      "productRating": 4.5,
      "productImageUrl": "assets/iphone.png"
    },
    {
      "productId": 2,
      "productName": "Samsung A70",
      "productCode": "hdsh-234",
      "productDate": "March 10, 2022",
      "productDescription": "Some description",
      "productPrice": 29.99,
      "productRating": 4.2,
      "productImageUrl": "assets/samsungA70.png"
    },
    {
      "productId": 3,
      "productName": "LG Wing",
      "productCode": "hggh-445",
      "productDate": "June 20, 2022",
      "productDescription": "Some description",
      "productPrice": 19.99,
      "productRating": 3.9,
      "productImageUrl": "assets/lg-wing.png"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
