





import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {


  @ViewChild(ProductListComponent) productListComponent:ProductListComponent;

  listOfString: string[] = ['anny', 'kheep', 'boss', 'queen']
  searchText: string = '';
  setSearchText(value: string) {
    this.searchText = value;
  }


  // // name="John Freek";
  // // bind="bind Style"
  // addToCart: number=0;
  // product = {
  //   name: "iPhone 13",
  //   price: 999,
  //   color: "Red",
  //   discount: 8.5,
  //   inStock: 10,
  //   pImage: '/assets/images/iphone.png'

  // }

  // getDiscountedPrice(){
  //   return (this.product.price- (this.product.price*this.product.discount/100)).toFixed(2)
  // }

  // onNameChange(event:any){
  //   // this.name=event.target.value
  //   // console.log(event.target.value);
  // }
  // increase(){
  //   if(this.addToCart< this.product.inStock){
  //     this.addToCart++;

  //   }
  // }
  // decrease(){
  //   if(this.addToCart>0){
  //     this.addToCart--;
  //   }

  // }
}
