import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { products } from '../products';
import { Product } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  
  constructor() { }
  ngOnInit(): void {
  }
  share ( link :  any ) { 
    window . open ( `https://t.me/share/url?url= ${ link } &text=Привет, тебе будет интересно,${this.product.name}`)
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  like(id: number){
    if (!products[id]?.liked)
    {
      products[id].like++;
      products[id].liked = true;
    }
    else if(products[id]?.disliked) {
      products[id].like += 1;
      products[id].disliked = false;

    }
  }

  dislike(id: number){
    if (!products[id]?.disliked)
    {
      products[id].like--;
      products[id].disliked = true;
    }
    else if(products[id]?.liked) {
      products[id].like -= 1;
      products[id].liked = false;

    }
  }
}
