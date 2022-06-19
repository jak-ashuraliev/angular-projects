import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({ 
    providedIn: 'root' 
})
export class ProductService {

    getProducts(): IProduct[] {
        return [
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
                "productRating": 2.5,
                "productImageUrl": "assets/lg-wing.png"
              },
              {
                "productId": 4,
                "productName": "iPhone 13",
                "productCode": "adfg-123",
                "productDate": "June 11, 2022",
                "productDescription": "Some description",
                "productPrice": 799.99,
                "productRating": 3.5,
                "productImageUrl": "assets/iphone.png"
              },
              {
                "productId": 5,
                "productName": "Samsung A70",
                "productCode": "hdsh-234",
                "productDate": "March 10, 2022",
                "productDescription": "Some description",
                "productPrice": 629.99,
                "productRating": 2.5,
                "productImageUrl": "assets/samsungA70.png"
              },
              {
                "productId": 6,
                "productName": "LG Wing",
                "productCode": "hggh-445",
                "productDate": "June 20, 2022",
                "productDescription": "Some description",
                "productPrice": 559.99,
                "productRating": 4.0,
                "productImageUrl": "assets/lg-wing.png"
              }, 
        ]
    }

}