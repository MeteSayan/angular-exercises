import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}
  getPokemons(): Pokemon[] {
    return [
      {
        id: 1,
        name: 'pikachu',
        type: 'electric',
        isCool: true,
        isStylish: true,
      },
      {
        id: 2,
        name: 'squirtle',
        type: 'water',
        isCool: false,
        isStylish: true,
      },
      {
        id: 3,
        name: 'charmander',
        type: 'fire',
        isCool: true,
        isStylish: false,
      },
    ];
  }
}
