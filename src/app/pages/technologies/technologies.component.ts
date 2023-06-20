import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
})
export class TechnologiesComponent implements OnInit {
  @ViewChild('carouselContainer') carouselContainer: ElementRef;
  public selectedImageTextVersion: string; // Agrega esta línea para definir la propiedad selectedImageTextVersion
  public selectedImageTextProject: string; // Agrega esta línea para definir la propiedad selectedImageTextVersion
  public empty: boolean = true;
  public showVersions: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.onClickImage(0);
    });
  }

  imageTextsVersion: string[] = [
    'Texto de la imagen 1',
    'Texto de la imagen 2',
    'Texto de la imagen 3',
  ];
  imageTextsProject: string[] = [
    'Texto de la imagen 1',
    'Texto de la imagen 2',
    'Texto de la imagen 3',
  ];

  onClickImage(imageIndex: number): void {
    this.updateCarousel(imageIndex);
    this.selectedImageTextVersion = this.imageTextsVersion[imageIndex];
    this.selectedImageTextProject = this.imageTextsProject[imageIndex];
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

  showVersion() {
    this.showVersions = true
    this.empty = false
  }
  
}
