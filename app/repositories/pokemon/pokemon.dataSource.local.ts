import IPokemonDataSourceStrategy from '../interfaces/IDataSourceStrategy';
import PokemonModel from '../../models/pokemon/pokemon.model';
import pokedex from './pokedex.json';
import useStorage from '../../../utils/storage';
const { setItem } = useStorage();
// import * as fs from 'fs';
// const fsPromises = fs.promises;

class PokemonLocalDataSource implements IPokemonDataSourceStrategy<PokemonModel> {
  private pokedex: PokemonModel[] = pokedex.map((pokemon) => PokemonModel.fromJSON(pokemon));

  constructor() {
    this.reset();
    setItem('pokedex', JSON.stringify(pokedex.map((pokemon) => PokemonModel.fromJSON(pokemon).toJson())), 'local');
  }

  public reset(): void {
    this.pokedex = pokedex.map((pokemon) => PokemonModel.fromJSON(pokemon));
  }

  public async getAll(): Promise<PokemonModel[]> {
    return this.pokedex;
  }

  public async getOne(id: string): Promise<PokemonModel | undefined> {
    return this.pokedex.find((pokemon) => pokemon.id.toString() == id);
  }

  public async post(item: PokemonModel): Promise<boolean> {
    try {
      this.pokedex.push(item);
      this.pokedex.sort((a, b) => (a.id < b.id ? -1 : 1));
      // const updatedPokedexJson: JSON[] = updatedPokedex.map((pokemon) => pokemon.toJson());
      // fsPromises.writeFile(__dirname + '/pokedex.json', JSON.stringify(updatedPokedexJson));
      return true;
    } catch (err) {
      return false;
    }
  }

  public async put(id: string, item: PokemonModel): Promise<boolean> {
    try {
      const index = pokedex.findIndex((pokemon) => pokemon.id.toString() == id);
      this.pokedex.map((pokemon) => PokemonModel.fromJSON(pokemon));
      this.pokedex[index] = item;
      // const updatedPokedexJson: JSON[] = updatedPokedex.map((pokemon) => pokemon.toJson());
      // fsPromises.writeFile(__dirname + '/pokedex.json', JSON.stringify(updatedPokedexJson));
      return index == -1 ? false : true;
    } catch (err) {
      return false;
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      const index = pokedex.findIndex((pokemon) => pokemon.id.toString() == id);
      this.pokedex = this.pokedex.slice(index, 1);
      // const updatedPokedexJson: JSON[] = updatedPokedex.map((pokemon) => pokemon.toJson());
      // fs.writeFileSync(__dirname + '/pokedex.json', JSON.stringify(updatedPokedexJson));
      return index == -1 ? false : true;
    } catch (err) {
      return false;
    }
  }
}

export default PokemonLocalDataSource;
