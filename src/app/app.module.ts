import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagelistingComponent } from './imagelisting/imagelisting.component';
import { ImagesService } from './images.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ImagelistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    HttpClientModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
