import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemonName: string;

  constructor() {
    this.pokemonName = '';
  }

  handleClick(value: any) {
    console.log(value);
  }
}
