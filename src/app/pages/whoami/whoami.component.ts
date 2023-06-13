import { Component } from '@angular/core';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html'
})
export class WhoamiComponent {

  public language: string = 'spanish';

  toggleLanguage(language:string){
    this.language = language
    
  }
}
