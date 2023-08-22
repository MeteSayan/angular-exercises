import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
  isStylish: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemonName: string = '';

  constructor() {}

  handleChange(event: any) {
    this.pokemonName = event.target.value;
  }
}
