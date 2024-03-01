import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './products';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private selectedCategorySubject = new Subject<number>();
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  prods: Product[] = products;
  public ProdCategory: number = -1;

  selectCateg(id: number) {
    this.ProdCategory = id;
    this.selectedCategorySubject.next(id);
  }

  getProds() {
    return this.prods;
  }

  constructor() {
    this.ProdCategory = -1;
  }
}
