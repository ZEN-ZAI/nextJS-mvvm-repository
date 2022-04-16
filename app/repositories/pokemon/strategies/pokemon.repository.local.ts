import PokemonModel from '../../../models/pokemon/pokemon.model';
import IPokemonRepositoryStrategy from '../../interfaces/IStrategy';
import pokemon from '../pokemon.json';

class PokemonLocalRepository implements IPokemonRepositoryStrategy<PokemonModel> {
  public getAll(): PokemonModel[] {
    return pokemon.map(pokemon => PokemonModel.fromJSON(pokemon));
  }

  public getOne(id: string): PokemonModel | undefined {
    return pokemon.map(pokemon => PokemonModel.fromJSON(pokemon)).find(pokemon => pokemon.id.toString() == id);
  }

  public post(item: PokemonModel): boolean {
    const json = item.toJson();
    return pokemon.push(json) == 1 ? true: false;
  }

  public put(id: string, item: PokemonModel): boolean {
    let pokemonJson: any = pokemon.find(pokemon => pokemon.id.toString() == id);
    pokemonJson = item.toJson();
    return pokemonJson != undefined ? true: false;
  }

  public delete(id: string): boolean {
    const index = pokemon.findIndex(pokemon => pokemon.id.toString() == id);
    pokemon.slice(index, 1);
    return index == -1 ? false: true;
  }
}

export default PokemonLocalRepository;
