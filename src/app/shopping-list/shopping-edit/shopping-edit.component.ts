import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  itemSelectValue: Subscription;
  editMode: boolean = false;
  itemIndex: number;
  selectedItem: Ingredient;
  constructor(
    private slService: ShoppingListService
  ) { }

  ngOnInit() {
    this.itemSelectValue = this.slService.onItemSelect
                               .subscribe(
                                 (index: number) => {
                                  this.editMode = true;
                                  this.itemIndex = index;
                                  this.selectedItem = this.slService.getIngredient(index);
                                  this.slForm.setValue(
                                    {
                                      name: this.selectedItem.name,
                                      amount: this.selectedItem.amount
                                    }
                                  );
                                 }
                               );
  }

  ngOnDestroy() {
    this.itemSelectValue.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    this.slService.deleteIngredient(this.itemIndex);
    this.onClear();
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode) {
      this.slService.updateIngredient(this.itemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.slForm.reset();
    this.editMode = false;
  }

}
