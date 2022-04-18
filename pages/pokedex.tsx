import { Box, Container } from "@mui/material";
import PokemonRepository from "../app/repositories/pokemon/pokemon.repository";
import PokemonLocalDataSource from "../app/repositories/pokemon/pokemon.dataSource.local";
import PokemonRemoteDataSource from "../app/repositories/pokemon/pokemon.dataSource.remote";
import PokemonViewModel from '../app/viewModels/pokemon/pokemon.viewModel';
import PokemonsView from '../app/views/pokemon/PokemonsView';
import PokemonModel from '../app/models/pokemon/pokemon.model';

type PokedexProps = {
  pokemonModels: PokemonModel[];
}

const PokemonsPage = ({ pokemonModels }: PokedexProps) => {
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
        <p>Pokemon Repository</p>
        <PokemonsView pokemonModels={pokemonModels} />
      </Box>
    </Container>
  )
}

export async function getStaticProps(){
  const pokemonLocalDataSource = new PokemonLocalDataSource();
  const pokemonRepository = new PokemonRepository(pokemonLocalDataSource);
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  return {
    props: {
      pokemonModels: pokemonViewModel.findAll.map(pokemon => pokemon.toJson())
    }
  }
}

export default PokemonsPage;
