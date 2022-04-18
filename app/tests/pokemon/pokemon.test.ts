import PokemonRepository from '../../repositories/pokemon/pokemon.repository';
import PokemonLocalDataSource from '../../repositories/pokemon/pokemon.dataSource.local';
import PokemonRemoteDataSource from '../../repositories/pokemon/pokemon.dataSource.remote';
import PokemonViewModel from '../../viewModels/pokemon/pokemon.viewModel';
import PokemonModel from '../../models/pokemon/pokemon.model';

const pokemonLocalDataSource = new PokemonLocalDataSource();
const pokemonRemoteDataSource = new PokemonRemoteDataSource();
const pokemonRepository = new PokemonRepository(pokemonLocalDataSource);

test('FindAll -> Pokemon must have 151', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  expect(pokemonViewModel.findAll.length).toBe(151);
});

test('FindOne -> Pokemon No. 1 name is Bulbasaur', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  const pokemon = pokemonViewModel.findOne('1');
  expect(pokemon?.name).toBe('Bulbasaur');
});

test('Create -> Pokemon must have 152', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  pokemonViewModel.create(PokemonModel.mock());
  expect(pokemonViewModel.findAll.length).toBe(152);
});

test('Update -> Pokemon No.1 name is ZEN', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  const pokemon = PokemonModel.mock();
  pokemon.id = 1;
  pokemonViewModel.update('1', pokemon);
  const updatedPokemon = pokemonViewModel.findOne('1');
  expect(updatedPokemon!.name).toBe('ZEN')
});

test('Delete -> Pokemon must have 150', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  pokemonViewModel.delete('1');
  expect(pokemonViewModel.findAll.length).toBe(150);
});
