import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredient = new EventEmitter<Ingredient>();
  @ViewChild('name') name: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addIngredient(amount: number){
    const newIIngredient = new Ingredient(this.name.nativeElement.value, amount);
    this.ingredient.emit(newIIngredient);
  }
}
