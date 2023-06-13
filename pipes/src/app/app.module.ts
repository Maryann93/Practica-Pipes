import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { LetrasPipe } from './letras.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IdiomasComponent,
    LetrasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
