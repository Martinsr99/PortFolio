import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent {
  public cardShown:boolean = true;

  disableCard() {
    this.cardShown=false
    this.resizeDiv()

  }
  resizeDiv() {
    const videoElement = document.getElementById('video');
    if (videoElement) {
      videoElement.style.transform = 'scale(0.5)';
      videoElement.style.zIndex = '999'
    }
  }
}
