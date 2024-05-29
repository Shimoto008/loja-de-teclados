import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mostrarBotaoMarca = true
  MostrarMarcas = false
  SelectedBrand: string | null = null

  mostrarBotaoOrdem = true
  MostrarOrdem = false
  SelectedOrdem: string | null = null

  escolherMarca(){
    this.MostrarMarcas = !
    this.MostrarMarcas
  }

  onBrandSelected(Brand: string){
    this.SelectedBrand = Brand
    this.MostrarMarcas = false


  }

  escolherOrdem(){
    this.MostrarOrdem = !
    this.MostrarOrdem

  }

  onOrdemSelected(Ordem: string){
    this.SelectedOrdem = Ordem
    this.MostrarOrdem = false


  }

}
