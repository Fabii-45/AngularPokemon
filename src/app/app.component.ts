import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  pokemons:Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemons);
  }

  selectPokemon(pokemonId: string){
    //BackTick pour éviter les concaténations comme en js 5
    //console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`)
  
    const pokemon: Pokemon|undefined = this.pokemons.find(pokemon => pokemon.id == +pokemonId);
  
    if(pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }

  //Modifier template du composant pour afficher simplement le message Liste de Pokemons
  //Au niveau de la pokémon list charger les 12 pokemons et pas que les 3
  //Changer ke type du selectPokemon de paramètres de string en Pokemon
}
