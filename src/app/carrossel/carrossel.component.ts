import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent implements OnInit, OnDestroy {
  private intervalid: any;

  ngOnInit(){
     this.iniciarCarrossel()
  }

  ngOnDestroy() {
    this.PararCarrossel()
  }



  iniciarCarrossel(){
    const slider = document.querySelector(".slider") as HTMLElement
    const slides = slider?.querySelectorAll("img") as
    NodeListOf<HTMLElement>

    const totalSlides = slides?.length
    let currentIndex = 0

    this.intervalid = setInterval(() =>{
      currentIndex = (currentIndex + 1) % totalSlides

      slider.scrollLeft = slides[currentIndex].offsetLeft
    }, 3000)
  }

  PararCarrossel(){
    if(this.intervalid){
      clearInterval(this.intervalid)
    }
  }

}
