import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-brand-selector',
  templateUrl: './brand-selector.component.html',
  styleUrl: './brand-selector.component.css'
})
export class BrandSelectorComponent {
 brands: string[] = ['wacom', 'logitech', 'corsair', 'gigabyte']

 @Output() BrandSelected = new EventEmitter<string>();

 SelectBrand(Brand: string){
  this.BrandSelected.emit(Brand)
 }


}
