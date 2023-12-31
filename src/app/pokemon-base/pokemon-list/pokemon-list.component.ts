import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  AfterContentInit,
  ContentChildren,
  ViewChild,
  Renderer2,
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
  @ViewChild('pokemonTh') pokemonTh!: ElementRef;
  @ContentChildren(PokemonDetailComponent) contentList!: any;

  constructor(
    private pokemonService: PokemonService,
    private renderer: Renderer2
  ) {}
  ngAfterContentInit(): void {
    console.log('this.contentList', this.contentList);
  }

  ngAfterViewInit(): void {
    console.log('this.pokemonRef', this.pokemonRef);
    // You can change element values with this method
    console.log('this.pokemonTh  1', this.pokemonTh.nativeElement.innerText);
    this.pokemonTh.nativeElement.innerText = 'Pokemon Name';
    console.log('this.pokemonTh  2', this.pokemonTh.nativeElement.innerText);

    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Pokemon List');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.pokemonTh.nativeElement, div);
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
