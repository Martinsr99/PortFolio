import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {


  get year(): number {
    const now = new Date();
    return now.getFullYear();
  }
}
