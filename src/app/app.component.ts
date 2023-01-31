import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: ` <h1> Liste de Pokémons </h1> `
})
export class AppComponent implements OnInit {
  
  pokemons:Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemons);
    this.selectPokemon(this.pokemons[0])
  }

  selectPokemon(pokemon: Pokemon){
    //BackTick pour éviter les concaténations comme en js 5
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`)
  }

  //Modifier template du composant pour afficher simplement le message Liste de Pokemons
  //Au niveau de la pokémon list charger les 12 pokemons et pas que les 3
  //Changer ke type du selectPokemon de paramètres de string en Pokemon
}
