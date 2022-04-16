import PokemonModel from "../../../models/pokemon/pokemon.model";
import IPokemonRepositoryStrategy from '../../interfaces/IStrategy';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(response => response.data);

class PokemonRemoteRepository implements IPokemonRepositoryStrategy<PokemonModel> {
  public async getAll(): Promise<PokemonModel[]> {
    try {
      //https://designer.mocky.io/manage/delete/460a9e14-d6c6-4cc1-8bd3-f8d1a4d2331f/noK27cPkfJaoM11UnmQhlre6X0c8a8yAkVFN
      const key = 'https://run.mocky.io/v3/460a9e14-d6c6-4cc1-8bd3-f8d1a4d2331f';
      return await fetcher(key);
    } catch (error) {
      throw error;
    }
  }

  public async getOne(id: string): Promise<PokemonModel> {
    return PokemonModel.mock();
  }

  public post(item: PokemonModel): boolean {
    const json = item.toJson();
    return true;
  }

  public put(id: string, item: PokemonModel): boolean {
    return true;
  }

  public delete(id: string): boolean {
    return true;
  }
}

export default PokemonRemoteRepository;
