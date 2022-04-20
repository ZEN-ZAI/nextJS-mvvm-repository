import { useEffect, useState } from "react";
import { Typography, Box, Container } from "@mui/material";
import PokemonRepository from "../app/repositories/pokemon/pokemon.repository";
import PokemonLocalDataSource from "../app/repositories/pokemon/pokemon.dataSource.local";
import PokemonRemoteDataSource from "../app/repositories/pokemon/pokemon.dataSource.remote";
import PokemonViewModel from '../app/viewModels/pokemon/pokemon.viewModel';
import PokedexView from '../app/views/pokemon/PokedexView';
import PokemonModel from '../app/models/pokemon/pokemon.model';
import useStorage from "../utils/storage";

type PokedexProps = {
  pokemonModels: PokemonModel[];
}

const PokemonsPage = ({ pokemonModels }: PokedexProps) => {

  const [data, setData] = useState<PokemonModel[]>(pokemonModels);
  const [isLoading, setLoading] = useState(false);
  const { getItem } = useStorage();

  useEffect(() => {
    setLoading(true);
    const pokemonRemoteDataSource = new PokemonRemoteDataSource();
    const pokemonRepository = new PokemonRepository(pokemonRemoteDataSource);
    const pokemonViewModelPromise = new PokemonViewModel().init(pokemonRepository);
    pokemonViewModelPromise.then(async pokemonViewModel => {
      const pokedex = await pokemonViewModel.findAll();
      setData(pokedex);
      setLoading(false);
    })
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <></>
  
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' color='primary'>
          Pokemon Repository
        </Typography>
        <PokedexView pokemonModels={data} />
      </Box>
    </Container>
  )
}

export async function getStaticProps() {
  const pokemonLocalDataSource = new PokemonLocalDataSource();
  const pokemonRepository = new PokemonRepository(pokemonLocalDataSource);
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  const pokedex = await pokemonViewModel.findAll();
  return {
    props: {
      pokemonModels: pokedex.map(pokemon => pokemon.toJson())
    }
  }
}

export default PokemonsPage;
