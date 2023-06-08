import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from '../app.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { titulo: 'Contact' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { titulo: 'About' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
