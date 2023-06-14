import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
})
export class TechnologiesComponent {
  @ViewChild('carouselContainer') carouselContainer: ElementRef;

  onClickImage(imageIndex: number): void {
    this.updateCarousel(imageIndex);
  }
  moveToPrevious(): void {
    const carouselImages = this.carouselContainer.nativeElement.querySelectorAll('.carousel-image');
    const centerImage = this.carouselContainer.nativeElement.querySelector('.carousel-image.center');
  
    let currentIndex = Array.from(carouselImages).indexOf(centerImage);
  
    if (currentIndex === 0) {
      currentIndex = carouselImages.length - 1;
    } else {
      currentIndex--;
    }
  
    this.updateCarousel(currentIndex);
  }
  
  moveToNext(): void {
    const carouselImages = this.carouselContainer.nativeElement.querySelectorAll('.carousel-image');
    const centerImage = this.carouselContainer.nativeElement.querySelector('.carousel-image.center');
  
    let currentIndex = Array.from(carouselImages).indexOf(centerImage);
  
    if (currentIndex === carouselImages.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  
    this.updateCarousel(currentIndex);
  }
  
  updateCarousel(centerIndex: number): void {
    const carouselImages = this.carouselContainer.nativeElement.querySelectorAll('.carousel-image');
  
    carouselImages.forEach((image, index) => {
      if (index === centerIndex) {
        image.classList.add('center');
      } else {
        image.classList.remove('center');
      }
    });
  }
  
}
