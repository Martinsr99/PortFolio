import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html'
})
export class WhoamiComponent {

  public language: string = 'spanish';

  constructor(private languageService: LanguageService) {}

  toggleLanguage(language:string){
    this.language = language
    this.languageService.language = language;
    this.languageService.languageChange.emit();
  }
}
