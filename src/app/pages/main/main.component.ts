import { VariableBinding } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  public cardShown:boolean = true;

  disableCard() {
    this.cardShown=false
    this.resizeDiv()

  }
  resizeDiv() {
    const videoElement = document.getElementById('video');
    if (videoElement) {
      videoElement.style.transform = 'scale(0.5)';
    }
  }
  

  

}
