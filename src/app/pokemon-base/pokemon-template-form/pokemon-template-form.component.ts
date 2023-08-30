import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pokemon = {} as Pokemon;
    this.route.params.subscribe((data: Params) => {
      this.pokemonService.getPokemon(data['id']).subscribe((data: Pokemon) => {
        this.pokemon = data;
      });
    });
  }

  back(): void {
    this.router.navigate(['/pokemon']);
  }

  toggleIsCool(object: any) {
    console.log(object);
  }

  handleSubmit(object: any) {
    console.log(object);
  }
}
