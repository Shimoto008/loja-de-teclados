import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ordem-selector',
  templateUrl: './ordem-selector.component.html',
  styleUrl: './ordem-selector.component.css'
})
export class OrdemSelectorComponent {

  ordens: string[] = ['menor preço', 'maior preço']

  @Output() OrdemSelected = new EventEmitter<string>();

  SelectOrdem(Ordem: string){
   this.OrdemSelected.emit(Ordem)
  }

}
