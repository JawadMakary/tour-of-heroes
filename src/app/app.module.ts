import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
@NgModule({
  declarations: [AppComponent, HeroesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    // Although ngModel is a valid Angular directive, it isn't available by default.
    // It belongs to the optional FormsModule and you must opt-in to using it.
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
