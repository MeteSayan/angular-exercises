import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonType } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css'],
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'fire',
    },
    {
      key: 1,
      value: 'water',
    },
    {
      key: 2,
      value: 'electric',
    },
    {
      key: 3,
      value: 'rock',
    },
  ];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }

  toggleIsCool(object: any) {
    console.log(object);
  }
}
