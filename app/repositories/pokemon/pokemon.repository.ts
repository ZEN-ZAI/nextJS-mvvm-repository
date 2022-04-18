import { BaseRepository } from '../base/baseRepository';
import IDataSourceStrategy from '../interfaces/IDataSourceStrategy';
import PokemonModel from '../../models/pokemon/pokemon.model';
import PokemonLocalDataSource from './pokemon.dataSource.local';
import PokemonRemoteDataSource from './pokemon.dataSource.remote';

class PokemonRepository extends BaseRepository<PokemonModel> {
  private pokemonDataSource: IDataSourceStrategy<PokemonModel> = new PokemonLocalDataSource();

  constructor(pokemonDataSource: IDataSourceStrategy<PokemonModel>) {
    super();
    this.pokemonDataSource = pokemonDataSource;
  }

  public setDataSource(pokemonDataSource: IDataSourceStrategy<PokemonModel>): void {
    this.pokemonDataSource = pokemonDataSource;
  }

  public setLocalDataSource(): void {
    this.pokemonDataSource = new PokemonLocalDataSource();
  }

  public setRemoteDataSource(): void {
    this.pokemonDataSource = new PokemonRemoteDataSource();
  }
  
  public async findAll(): Promise<PokemonModel[]> {
    return this.pokemonDataSource.getAll();
  }

  public async findOne(id: string): Promise<PokemonModel | undefined> {
    return await this.pokemonDataSource.getOne(id);
  }

  public async create(pokemon: PokemonModel): Promise<boolean>{
    return await this.pokemonDataSource.post(pokemon);
  }

  public async update(id: string, pokemon: PokemonModel): Promise<boolean>{
    return await this.pokemonDataSource.put(id, pokemon);
  }

  public async delete(id: string): Promise<boolean>{
    return await this.pokemonDataSource.delete(id);
  }
}

export default PokemonRepository;
