import {Component, Input} from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  @Input() category: string|undefined;

  deleteFunc(productid:number){  this.products=this.products.filter(p=>p.id!==productid);
  }

}