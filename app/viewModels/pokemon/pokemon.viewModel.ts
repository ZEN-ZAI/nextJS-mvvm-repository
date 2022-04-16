import { runInAction, action, computed, observable } from 'mobx';
import PokemonModel from '../../models/pokemon/pokemon.model';

class PokemonViewModel {
  @observable private pokemons: PokemonModel[] = [];

  constructor(pokemons: PokemonModel[]) {
    this.pokemons = pokemons;
  }

  @computed get findAll(): PokemonModel[] {
    return this.pokemons;
  }

  @computed findOne(id: string): PokemonModel | undefined {
    return this.pokemons.find((p) => p.id.toString() === id);
  }

  @action create(pokemon: PokemonModel): boolean {
    const length = this.pokemons.length;
    return this.pokemons.push(pokemon) > length ? true : false;
  }

  @action update(id: string, pokemon: PokemonModel): boolean {
    const index: number = this.pokemons.findIndex((p) => p.id.toString() === id);
    this.pokemons[index] = pokemon;
    return index != -1 ? true : false;
  }

  @action delete(id: string): boolean {
    const length = this.pokemons.length;
    const updatedLength = this.pokemons.splice(
      this.pokemons.findIndex((item) => item.id.toString() === id),
      1
    );
    return updatedLength.length > length ? true : false;
  }

  @computed get toJson(): any {
    return JSON.stringify(this.pokemons);
  }
}

export default PokemonViewModel;
