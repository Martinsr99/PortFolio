import { VariableBinding } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  public cardShown:boolean = true;
  public overlay = document.getElementById('overlay')

  disableCard() {
    this.cardShown=false
    console.log(this.overlay)

  }

  

}
