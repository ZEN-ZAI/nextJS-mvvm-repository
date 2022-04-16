import PokemonModel from '../../models/pokemon/pokemon.model';
import { BaseRepository } from '../base/baseRepository';
import IPokemonRepository from '../interfaces/IStrategy';

class PokemonRepository extends BaseRepository<PokemonModel> {
  private pokemonRepository: IPokemonRepository<PokemonModel>;

  constructor(pokemonRepository: IPokemonRepository<PokemonModel>) {
    super();
    this.pokemonRepository = pokemonRepository;
  }

  public async findAll(): Promise<PokemonModel[]> {
    return await this.pokemonRepository.getAll();
  }

  public async findOne(id: string): Promise<PokemonModel | undefined> {
    return await this.pokemonRepository.getOne(id);
  }

  public async create(pokemon: PokemonModel): Promise<boolean>{
    return await this.pokemonRepository.post(pokemon);
  }

  public async update(id: string, pokemon: PokemonModel): Promise<boolean>{
    return await this.pokemonRepository.put(id, pokemon);
  }

  public async delete(id: string): Promise<boolean>{
    return await this.pokemonRepository.delete(id);
  }
}

export default PokemonRepository;
