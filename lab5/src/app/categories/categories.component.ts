import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = [{id: 0, title:'smartphones'}, {id: 1, title:'laptops'}, {id: 2, title:'TVs'}, {id: 3, title:'tablets'},{id: 4, title:'headphones'}];
  constructor( private service: SenderService) { }

  ngOnInit(): void {
  }

  selectCategory(id: any){
    this.service.selectCateg(id);    
  }
}
