import PokemonModel from '../../models/pokemon/pokemon.model';
import PokemonRepository from '../../repositories/pokemon/pokemon.repository';
import PokemonLocalRepository from '../../repositories/pokemon/strategies/pokemon.repository.local';
import PokemonRemoteRepository from '../../repositories/pokemon/strategies/pokemon.repository.remote';
import PokemonViewModel from '../../viewModels/pokemon/pokemon.viewModel';

const pokemonLocalRepository = new PokemonLocalRepository();
const pokemonRepository = new PokemonRepository(pokemonLocalRepository);
// const pokemonRemoteRepository = new PokemonRemoteRepository();
// const pokemonRepository = new PokemonRepository(pokemonRemoteRepository);

test('FindAll -> Pokemon must have 151', async () => {
  const pokemonModels = await pokemonRepository.findAll();
  const pokemonViewModel = new PokemonViewModel(pokemonModels);
  expect(pokemonViewModel.findAll.length).toBe(151);
});

test('FindOne -> Pokemon No. 1 name is Bulbasaur', async () => {
  const pokemonModels = await pokemonRepository.findAll();
  const pokemonViewModel = new PokemonViewModel(pokemonModels);
  const pokemon = pokemonViewModel.findOne('1');
  expect(pokemon?.name).toBe('Bulbasaur');
});

test('Create -> Pokemon must have 152', async () => {
  const pokemonModels = await pokemonRepository.findAll();
  const pokemonViewModel = new PokemonViewModel(pokemonModels);
  pokemonViewModel.create(PokemonModel.mock());
  expect(pokemonViewModel.findAll.length).toBe(152);
});

test('Update -> Pokemon No.1 name is ZEN', async () => {
  const pokemonModels = await pokemonRepository.findAll();
  const pokemonViewModel = new PokemonViewModel(pokemonModels);
  const pokemon = PokemonModel.mock();
  pokemon.id = 1;
  pokemonViewModel.update('1', pokemon);
  const updatedPokemon = pokemonViewModel.findOne('1');
  expect(updatedPokemon!.name).toBe('ZEN')
});

test('Delete -> Pokemon must have 150', async () => {
  const pokemonModels = await pokemonRepository.findAll();
  const pokemonViewModel = new PokemonViewModel(pokemonModels);
  pokemonViewModel.delete('1');
  expect(pokemonViewModel.findAll.length).toBe(150);
});
