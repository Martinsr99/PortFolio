import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { titulo: 'Contact' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
