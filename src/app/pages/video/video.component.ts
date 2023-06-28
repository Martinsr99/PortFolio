import { Component, HostListener, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit {
  public cardShown: boolean = true;

  // Add this property to bind the class dynamically
  @HostBinding('class.disable-scroll-y')
  get disableScrollYClass() {
    return this.cardShown ? 'disable-scroll' : '';
  } 

  //Disable card function
  disableCard() {
    this.cardShown = false;
    this.resizeDiv();
    //Enable scrolling when card is hidden
    document.body.classList.add('enable-scrollbar');
  }

  //Function to resize video when card is hidden
  resizeDiv() {
    const videoElement = document.getElementById('video');
    if (videoElement) {
      videoElement.style.transform = 'scale(0.5)';
      videoElement.style.zIndex = '999';
    }
  }

  // Listen for scroll events
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.cardShown) {
      // Prevent default scroll behavior on the Y-axis
      event.preventDefault();
      window.scrollTo(window.scrollX, 0);
    }
  }

  //Disable scrolling on init 
  ngOnInit() {
    document.body.classList.add('disable-scrollbar');
  }
}
