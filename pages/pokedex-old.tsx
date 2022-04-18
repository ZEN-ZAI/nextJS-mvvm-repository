import { useEffect, useState } from 'react';
import { Box, Container } from "@mui/material";
import PokemonRepository from "../app/repositories/pokemon/pokemon.repository";
import PokemonLocalDataSource from "../app/repositories/pokemon/pokemon.dataSource.local";
import PokemonRemoteDataSource from "../app/repositories/pokemon/pokemon.dataSource.remote";
import PokemonViewModel from '../app/viewModels/pokemon/pokemon.viewModel';
import PokedexView from '../app/views/pokemon/PokedexView';

const PokemonsPage = () => {
  const pokemonLocalDataSource = new PokemonLocalDataSource();
  const pokemonRemoteDataSource = new PokemonRemoteDataSource();

  const [data, setData] = useState<PokemonViewModel>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const pokemonRepository = new PokemonRepository(pokemonLocalDataSource);
    const pokemonViewModel = new PokemonViewModel().init(pokemonRepository);
    pokemonViewModel.then(viewModel => {
      setData(viewModel);
      setLoading(false);
    })
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Pokemon Local Repository</p>
        {/* <PokedexView pokemonModels={data.findAll} /> */}
        {/* <p>Pokemon Local Repository</p>
        <PokemonViewController pokemonRepository={pokemonLocalDataSource} />
        <p>Pokemon Remote Repository</p>
        <PokemonViewController pokemonRepository={pokemonRemoteDataSource} /> */}
      </Box>
    </Container>
  )
}

export default PokemonsPage;
