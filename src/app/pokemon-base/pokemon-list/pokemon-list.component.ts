import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  AfterContentInit,
  ContentChildren,
} from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  pokemons!: Pokemon[];
  // ViewChildren for array
  // ViewChild for single data
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ContentChildren(PokemonDetailComponent) contentList!: any;

  constructor(private pokemonService: PokemonService) {}
  ngAfterContentInit(): void {
    console.log('this.contentList', this.contentList);
  }

  ngAfterViewInit(): void {
    console.log('this.pokemonRef', this.pokemonRef);
  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    });
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data;
    });
  }
}
