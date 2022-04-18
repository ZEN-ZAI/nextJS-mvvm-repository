import IPokemonDataSourceStrategy from '../interfaces/IDataSourceStrategy';
import PokemonModel from '../../models/pokemon/pokemon.model';
import pokedex from './pokedex.json';

class PokemonLocalDataSource implements IPokemonDataSourceStrategy<PokemonModel> {
  public async getAll(): Promise<PokemonModel[]> {
    return pokedex.map(pokemon => PokemonModel.fromJSON(pokemon));
  }

  public async getOne(id: string): Promise<PokemonModel | undefined> {
    return pokedex.map(pokemon => PokemonModel.fromJSON(pokemon)).find(pokemon => pokemon.id.toString() == id);
  }

  public async post(item: PokemonModel): Promise<boolean> {
    return pokedex.push(Object.assign(item)) == 1 ? true: false;
  }

  public async put(id: string, item: PokemonModel): Promise<boolean> {
    let pokemonJson: any = pokedex.find(pokemon => pokemon.id.toString() == id);
    pokemonJson = item.toJson();
    return pokemonJson != undefined ? true: false;
  }

  public async delete(id: string): Promise<boolean> {
    const index = pokedex.findIndex(pokemon => pokemon.id.toString() == id);
    pokedex.slice(index, 1);
    return index == -1 ? false: true;
  }
}

export default PokemonLocalDataSource;
