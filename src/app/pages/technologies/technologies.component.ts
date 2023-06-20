import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

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

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.onClickImage(0);
    });
  }

  public getLanguage(): string {
    return this.languageService.language;
  }

  imageTextsVersion: string[] = [
    'V.11 to V.16',
    '',
    '',
    '',
    '',
    'Texto de la imagen 6',
    '',
    'Texto de la imagen 8',
    'Texto de la imagen 9',
    'Texto de la imagen 10',
  ];
  imageTextsProjectESP: string[] = [
    'He trabajado en la creación de diferentes proyectos webs en ámbitos diversos, desde ONG como drinkable rivers, hasta el mundo de las teleoperadoras trabajando para orange en bélgica. Aunque es cierto que mi desarrollo laboral se centra en el backend, en la parte del front, angular ha sido la herramienta más utilizada y que he mantenido en continuo aprendizaje para proyectos personales pues me considero apasionado del diseño gráfico y la implementación de animaciones con css.',
    'Docker ha sido la herramienta por excelencia para el futuro despliegue de todas las aplicaciones creadas debido a su versatilidad. Mis funciones se resumen en la creación de contenedores, despliegue de imágenes y testeo en los diferentes sistemas',
    'Texto de la imagen 3',
    'Texto de la imagen 4',
    'Texto de la imagen 5',
    'Texto de la imagen 6',
    'Texto de la imagen 7',
    'Texto de la imagen 8',
    'Texto de la imagen 9',
    'Texto de la imagen 10',
  ];
  imageTextsProjectENG: string[] = [
    'I have worked on creating different web projects in various domains, ranging from NGOs like Drinkable Rivers to the world of telecommunication companies, working for Orange in Belgium. While it is true that my professional focus is on backend development, in the frontend area, Angular has been the most commonly used tool that I have continuously been learning for personal projects. I consider myself passionate about graphic design and implementing animations with CSS.',
    'eng',
    'Texto de la imagen 3',
    'Texto de la imagen 4',
    'Texto de la imagen 5',
    'Texto de la imagen 6',
    'Texto de la imagen 7',
    'Texto de la imagen 8',
    'Texto de la imagen 9',
    'Texto de la imagen 10',
  ];

  onClickImage(imageIndex: number): void {
    this.updateCarousel(imageIndex);
    this.selectedImageTextVersion = this.imageTextsVersion[imageIndex];
    if(this.getLanguage()==='spanish'){
      this.selectedImageTextProject = this.imageTextsProjectESP[imageIndex];
    }else{
      this.selectedImageTextProject = this.imageTextsProjectENG[imageIndex];
    }
  }
  moveToPrevious(): void {
    const carouselImages =
      this.carouselContainer.nativeElement.querySelectorAll('.carousel-image');
    const centerImage = this.carouselContainer.nativeElement.querySelector(
      '.carousel-image.center'
    );

    let currentIndex = Array.from(carouselImages).indexOf(centerImage);

    if (currentIndex === 0) {
      currentIndex = carouselImages.length - 1;
    } else {
      currentIndex--;
    }

    this.updateCarousel(currentIndex);
  }

  moveToNext(): void {
    const carouselImages =
      this.carouselContainer.nativeElement.querySelectorAll('.carousel-image');
    const centerImage = this.carouselContainer.nativeElement.querySelector(
      '.carousel-image.center'
    );

    let currentIndex = Array.from(carouselImages).indexOf(centerImage);

    if (currentIndex === carouselImages.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    this.updateCarousel(currentIndex);
  }

  updateCarousel(centerIndex: number): void {
    const carouselImages =
      this.carouselContainer.nativeElement.querySelectorAll('.carousel-image');

    carouselImages.forEach((image, index) => {
      if (index === centerIndex) {
        image.classList.add('center');
      } else {
        image.classList.remove('center');
      }
    });
  }

  showVersion() {
    this.showVersions = true;
    this.empty = false;
  }
}
