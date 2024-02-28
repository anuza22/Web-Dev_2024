import { Injectable } from '@angular/core';
import { Product } from './products';
import { products } from './products';


@Injectable({
  providedIn: 'root'
})
export class SenderService {

  prods = [] = products; 
  public ProdCategory: number = -1;

  selectCateg(id: number){
    let products = this.prods.filter(el=>el.category==id+1); 
    console.log(products);
    this.ProdCategory = id;
  }

  getProds(){
    return this.prods;
  }
  
  constructor() { 
    this.ProdCategory = -1;
  }
}
