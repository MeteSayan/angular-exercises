import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NotfoundComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PokemonBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
