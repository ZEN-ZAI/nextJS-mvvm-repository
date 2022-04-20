import { action, computed, observable } from 'mobx';
import PokemonModel from '../../models/pokemon/pokemon.model';
import PokemonLocalDataSource from '../../repositories/pokemon/pokemon.dataSource.local';
import PokemonRepository from '../../repositories/pokemon/pokemon.repository';

class PokemonViewModel {
  @observable private pokemonRepository: PokemonRepository = new PokemonRepository(new PokemonLocalDataSource());

  @action async init(pokemonRepository: PokemonRepository): Promise<PokemonViewModel> {
    this.pokemonRepository = pokemonRepository;
    return this;
  }

  @computed async findAll(): Promise<PokemonModel[]> {
    return this.pokemonRepository.findAll();
  }

  @computed async findOne(id: string): Promise<PokemonModel | undefined> {
    return this.pokemonRepository.findOne(id);
  }

  @action create(item: PokemonModel): Promise<boolean> {
    return this.pokemonRepository.create(item);
  }

  @action update(id: string, item: PokemonModel): Promise<boolean> {
    return this.pokemonRepository.update(id, item);
  }

  @action delete(id: string): Promise<boolean> {
    return this.pokemonRepository.delete(id);
  }

  // @computed get toJson(): any {
  //   return JSON.stringify(this.pokedex);
  // }
}

export default PokemonViewModel;
