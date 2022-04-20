import PokemonRepository from '../../app/repositories/pokemon/pokemon.repository';
import PokemonLocalDataSource from '../../app/repositories/pokemon/pokemon.dataSource.local';
import PokemonRemoteDataSource from '../../app/repositories/pokemon/pokemon.dataSource.remote';
import PokemonViewModel from '../../app/viewModels/pokemon/pokemon.viewModel';
import PokemonModel from '../../app/models/pokemon/pokemon.model';

const pokemonLocalDataSource = new PokemonLocalDataSource();
const pokemonRemoteDataSource = new PokemonRemoteDataSource();
const pokemonRepository = new PokemonRepository(pokemonLocalDataSource);

// test('FindAll -> Pokemon must greater than 0', async () => {
//   const pokedex = await pokemonRepository.findAll();
//   expect(pokedex.length).toBeGreaterThan(0);
// });

// test('FindOne -> Pokemon No. 1 name is Bulbasaur', async () => {
//   const pokemon = await pokemonRepository.findOne('1');
//   expect(pokemon?.name).toBe('Bulbasaur');
// });

// // test('Create -> Pokemon No.0 name is ZEN', async () => {
// //   await pokemonRepository.create(PokemonModel.mock());
// //   const pokemon = await pokemonRepository.findOne('0');
// //   expect(pokemon!.name).toBe('ZEN');
// // });

// test('Update -> Pokemon No.0 name is ZENZENZEN', async () => {
//   const pokemon = PokemonModel.mock();
//   pokemon.id = 0;
//   pokemon.name = 'ZENZENZEN';
//   await pokemonRepository.update('0', pokemon);
//   const updatedPokemon = await pokemonRepository.findOne('0');
//   expect(updatedPokemon!.name).toBe('ZENZENZEN');
// });

// test('Delete -> Pokemon No.0 must to be undefined', async () => {
//   await pokemonRepository.delete('0');
//   await sleep(2000);
//   const pokemon = await pokemonRepository.findOne('0');
//   expect(pokemon).toBe(undefined);
// });

///-----

test('FindAll -> Pokemon must have 151', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  const pokedex = await pokemonViewModel.findAll();
  expect(pokedex.length).toBe(151);
});

test('FindOne -> Pokemon No. 1 name is Bulbasaur', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  const pokemon = await pokemonViewModel.findOne('1');
  expect(pokemon?.name).toBe('Bulbasaur');
});

test('Create -> Pokemon No.0 name is ZEN', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  pokemonViewModel.create(PokemonModel.mock());
  const pokemon = await pokemonViewModel.findOne('0');
  expect(pokemon!.name).toBe('ZEN');
});

test('Update -> Pokemon No.0 name is ZENZENZEN', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  let pokemon = await pokemonViewModel.findOne('0');
  pokemon!.name = 'ZENZENZEN';
  await pokemonViewModel.update('0', pokemon!);
  const updatedPokemon = await pokemonViewModel.findOne('0');
  expect(updatedPokemon!.name).toBe('ZENZENZEN');
});

test('Delete -> Pokemon No.0 must to be undefined', async () => {
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  await pokemonViewModel.delete('0');
  const pokemon = await pokemonViewModel.findOne('0');
  expect(pokemon).toBe(undefined);
});
