import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm, Form } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editingItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editingItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editingItem.name,
          amount: this.editingItem.amount
        })
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, this.getIngredient());
    } else {
      this.shoppingListService.addIngredient(this.getIngredient());
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.shoppingListService.removeIngredient(this.editedItemIndex);
    this.onClear();
  }

  getIngredient(): Ingredient {
    const name = this.shoppingListForm.value['name'];
    const amount = this.shoppingListForm.value['amount'];
    return new Ingredient(name, amount);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
