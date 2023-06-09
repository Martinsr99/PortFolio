import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { AboutComponent } from './pages/about/about.component';
import { WhoamiComponent } from './pages/whoami/whoami.component';
import { VideoComponent } from './pages/video/video.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    MainComponent,
    ContactComponent,
    AboutComponent,
    WhoamiComponent,
    VideoComponent,
    TechnologiesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
