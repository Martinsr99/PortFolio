import { Injectable,EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public language: string = 'spanish';
  public languageChange: EventEmitter<void> = new EventEmitter<void>();
}
