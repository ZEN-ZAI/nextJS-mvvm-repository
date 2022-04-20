import PokemonModel from "../../models/pokemon/pokemon.model";
import IPokemonDataSourceStrategy from '../interfaces/IDataSourceStrategy';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(response => response.data);

class PokemonRemoteDataSource implements IPokemonDataSourceStrategy<PokemonModel> {
  public async getAll(): Promise<PokemonModel[]> {
    try {
      //https://designer.mocky.io/manage/delete/f9d9d724-2a69-4948-b8d0-3824fedcf87e/Tkl0s6gsWoxuwhPU2roIT9AcJv0tqmjhwxL2
      const key = 'https://run.mocky.io/v3/f9d9d724-2a69-4948-b8d0-3824fedcf87e';
      return fetcher(key);
    } catch (error) {
      throw error;
    }
  }

  public async getOne(id: string): Promise<PokemonModel> {
    try {
      //https://designer.mocky.io/manage/delete/e691fd27-3ba9-4949-b435-427bbf914774/J6Hg9c3P99PGQN4DHZOmWdm4dwJIuhJV3tGq
      const key = 'https://run.mocky.io/v3/e691fd27-3ba9-4949-b435-427bbf914774';
      return fetcher(key);
    } catch (error) {
      throw error;
    }
  }

  public async post(item: PokemonModel): Promise<boolean> {
    const json = item.toJson();
    return true;
  }

  public async put(id: string, item: PokemonModel): Promise<boolean> {
    return true;
  }

  public async delete(id: string): Promise<boolean> {
    return true;
  }
}

export default PokemonRemoteDataSource;
