import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { titulo: 'Main' },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes),PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
