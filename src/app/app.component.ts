import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: true,
    },
    {
      id: 2,
      name: 'squirtle',
      type: 'water',
      isCool: false,
    },
    {
      id: 3,
      name: 'charmander',
      type: 'fire',
      isCool: true,
    },
  ];

  constructor() {}
}
