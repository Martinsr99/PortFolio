import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
})
export class TechnologiesComponent implements OnInit {
  @ViewChild('carouselContainer') carouselContainer: ElementRef;
  public selectedImageTextProject: string;
  public empty: boolean = true;
  public showVersions: boolean = false;
  public oldIndex: number = 0;
  public isTextProjectChanged: boolean = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.languageChange.subscribe(() => {
      this.onClickImage(this.oldIndex);
    });
    setTimeout(() => {
      this.onClickImage(0);
    });
  }

  //Method to call language service and set texts dynamically
  public getLanguage(): string {
    return this.languageService.language;
  }

  imageTextsProjectESP: string[] = [
    'He trabajado en la creación de diferentes proyectos webs en ámbitos diversos, desde ONG como drinkable rivers, hasta el mundo de las teleoperadoras trabajando para orange en bélgica. Aunque es cierto que mi desarrollo laboral se centra en el backend, en la parte del front, angular ha sido la herramienta más utilizada y que he mantenido en continuo aprendizaje para proyectos personales pues me considero apasionado del diseño gráfico y la implementación de animaciones con css.',
    'Docker ha sido la herramienta por excelencia para el futuro despliegue de todas las aplicaciones creadas debido a su versatilidad. Mis funciones se resumen en la creación de contenedores, despliegue de imágenes y testeo en los diferentes sistemas',
    'Git es el pan de cada día para los desarrolladores, una herramienta que por muchas interfaces gráficas que se molesten en sacar, la mayoría seguiremos prefiriendo manejar desde la consola porque queda más "pro". He trabajado tanto con gitlab(laboralmente) como github(en lo personal) y por ende ha sido la herramienta de manejo de versiones y tambien de monitorización de CI/CD, así como despliegues a partir de terceros.',
    'En mi experiencia, he trabajado extensivamente con los servicios de Google Cloud Platform (GCP) como Google Compute Engine, Google Kubernetes Engine y Google App Engine. He demostrado habilidad en la creación y configuración de máquinas virtuales, la implementación de aplicaciones en contenedores utilizando Kubernetes y el uso de las capacidades sin servidor de la plataforma. Además debido a que me he movido siempre en entornos promovidos por google, he hecho uso de otra multitud de herramientas como por ejemplo firebase para el desarrollo de proyectos personales.',
    'MongoDB es sin duda la base de datos no relacional con la que más he trabajado, tanto en lo personal para pequeños proyectos, como para almacenamiento masivo de información y su tratamiento. Además, he realizado conexiones a través de python o de herramientas como mongoose con la que me siento muy familiarizado y capaz de realizar cualquier operación necesaria. Finalmente, he trabajado también con mongo atlas y otras herramientas visuales para el manejo y visualización de datos.',
    'He utilizado Node.js para construir aplicaciones web escalables y de alto rendimiento con capacidad para manejar solicitudes de manera asincrónica con la ayuda de la biblioteca Express.js para construir APIs RESTful y aplicaciones web robustas.También he trabajado con frameworks y librerías populares de Node.js, como Socket.io para desarrollar aplicaciones en tiempo real y manejar comunicaciones en tiempo real mediante WebSockets. He utilizado Mongoose como una capa de abstracción para interactuar con bases de datos NoSQL, como MongoDB, y realizar operaciones CRUD de manera eficiente.',
    'He utilizado PostgreSQL para diseñar y administrar bases de datos complejas, mayoritariamente en entornos empresariales. He trabajado con la estructura de tablas, índices y restricciones para garantizar la integridad y consistencia de los datos. Además, he aprovechado las capacidades avanzadas de PostgreSQL, como las funciones almacenadas, los procedimientos almacenados y los disparadores, para implementar lógica de negocio en el nivel de base de datos.',
    'En el ámbito laboral he utilizado Python para desarrollar aplicaciones web utilizando frameworks populares como Django y Flask. Estos frameworks han facilitado la creación de aplicaciones web robustas y escalables, permitiéndome implementar funcionalidades como autenticación de usuarios, gestión de bases de datos y creación de APIs RESTful. En el ámbito personal, he trabajado con python para la creación de scripts para el testeo de seguridad de diferentes sitios webs así como web scrapping',
    'Mi experiencia inicial con typescript reside en las bases de javascript que poseía a la hora de realizar pequeños scripts con fines de hacking ético, por lo que aprender typescript se me hizo más sencillo.He utilizado TypeScript en proyectos de desarrollo web, tanto en el frontend como en el backend. En el frontend, he trabajado con frameworks populares como Angular o React, aprovechando las características de tipado estático de TypeScript para mejorar la calidad y mantenibilidad del código. En el backend, he utilizado TypeScript junto con Node.js para construir aplicaciones y servicios.',
    'Mi experiencia en el desarrollo con react se resume en la parte front mayoritariamente mediante la creación de aplicaciones web tanto con redux como haciendo uso de hooks y otras herramientas características de este framework. En definitiva, React ha sido una herramienta esencial en mi trabajo para crear aplicaciones web modernas y atractivas.',
  ];
  imageTextsProjectENG: string[] = [
    'I have worked on creating different web projects in various domains, ranging from NGOs like Drinkable Rivers to the world of telecommunication companies, working for Orange in Belgium. While it is true that my professional focus is on backend development, in the frontend area, Angular has been the most commonly used tool that I have continuously been learning for personal projects. I consider myself passionate about graphic design and implementing animations with CSS.',
    'Docker has been the tool par excellence for the future deployment of all created applications due to its versatility. My tasks can be summarized as container creation, image deployment, and testing on different systems.',
    'Git is the daily bread for developers, a tool that despite the numerous graphical interfaces that have been released, most of us still prefer to handle from the command line because it feels more "pro". I have worked with both GitLab (professionally) and GitHub (personally), and therefore it has been the version control and CI/CD monitoring tool for me, as well as facilitating deployments from third-party sources.',
    'In my experience, I have extensively worked with Google Cloud Platform (GCP) services such as Google Compute Engine, Google Kubernetes Engine, and Google App Engine. I have demonstrated proficiency in creating and configuring virtual machines, deploying containerized applications using Kubernetes, and utilizing the serverless capabilities of the platform. Additionally, since I have always been in environments promoted by Google, I have also used a multitude of other tools, such as Firebase, for the development of personal projects.',
    'MongoDB is undoubtedly the non-relational database I have worked with the most, both personally for small projects and for massive information storage and processing. Additionally, I have made connections through Python or tools like Mongoose, with which I feel very familiar and capable of performing any necessary operation. Lastly, I have also worked with MongoDB Atlas and other visual tools for data management and visualization.',
    'I have used Node.js to build scalable and high-performance web applications capable of handling requests asynchronously. With the help of the Express.js library, I have developed robust RESTful APIs and web applications.I have also worked with popular Node.js frameworks and libraries such as Socket.io to develop real-time applications and manage real-time communications using WebSockets. I have utilized Mongoose as an abstraction layer to interact with NoSQL databases like MongoDB and efficiently perform CRUD operations.',
    'I have used PostgreSQL to design and manage complex databases, mainly in enterprise environments. I have worked with table structure, indexes, and constraints to ensure data integrity and consistency. Additionally, I have leveraged advanced capabilities of PostgreSQL, such as stored functions, stored procedures, and triggers, to implement business logic at the database level.',
    'In a professional setting, I have used Python to develop web applications using popular frameworks such as Django and Flask. These frameworks have facilitated the creation of robust and scalable web applications, allowing me to implement functionalities such as user authentication, database management, and creation of RESTful APIs. In a personal context, I have worked with Python to create scripts for security testing of various websites, as well as web scraping.',
    "My initial experience with TypeScript stemmed from my foundation in JavaScript when creating small scripts for ethical hacking purposes, which made it easier for me to learn TypeScript. I have used TypeScript in web development projects, both on the frontend and backend. On the frontend, I have worked with popular frameworks like Angular or React, leveraging TypeScript's static typing features to enhance code quality and maintainability. On the backend, I have used TypeScript in conjunction with Node.js to build applications and services.",
    'My experience in React development can be summarized in the front-end part, mainly through creating web applications using Redux as well as utilizing hooks and other characteristic tools of this framework. Overall, React has been an essential tool in my work for building modern and appealing web applications.',
  ];

  //Function to swap texts when clicking on a different logo
  onClickImage(imageIndex: number): void {
    this.isTextProjectChanged = true;
    this.oldIndex = imageIndex;
    this.updateCarousel(imageIndex);
    if (this.getLanguage() === 'spanish') {
      this.selectedImageTextProject = this.imageTextsProjectESP[imageIndex];
    } else {
      this.selectedImageTextProject = this.imageTextsProjectENG[imageIndex];
    }
    // Delay resetting isTextProjectChanged to false to allow the animation to play
    setTimeout(() => {
      this.isTextProjectChanged = false;
    }, 500); // Adjust the delay time as needed
  }

  //Function with the logic when clicking on a logo
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
}
