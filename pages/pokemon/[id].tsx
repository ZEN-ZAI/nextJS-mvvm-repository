import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Container } from '@mui/material';
import PokemonView from '../../app/views/pokemon/PokemonView';
import PokemonModel from '../../app/models/pokemon/pokemon.model';
import PokemonLocalDataSource from '../../app/repositories/pokemon/pokemon.dataSource.local';
import PokemonRemoteDataSource from '../../app/repositories/pokemon/pokemon.dataSource.remote';
import PokemonRepository from '../../app/repositories/pokemon/pokemon.repository';
import PokemonViewModel from '../../app/viewModels/pokemon/pokemon.viewModel';

type PokemonProps = {
  pokemonModel: PokemonModel;
}

const PokemonPage = ({ pokemonModel }: PokemonProps) => {
  const router = useRouter();
  const id = router.query.id as string;

  const pokemonLocalDataSource = new PokemonLocalDataSource();
  const pokemonRemoteDataSource = new PokemonRemoteDataSource();

  const [data, setData] = useState<PokemonModel>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const pokemonRepository = new PokemonRepository(pokemonLocalDataSource);
    const pokemonViewModelPromise = new PokemonViewModel().init(pokemonRepository);
    pokemonViewModelPromise.then(pokemonViewModel => {
      setData(pokemonViewModel.findOne(id)!);
      setLoading(false);
    })
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <></>

  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <p>Pokemon Id: {id}</p>
        <PokemonView pokemonModel={data} />
      </Box>
    </Container>
  )
}

export async function getStaticPaths() {
  const pokemonLocalDataSource = new PokemonLocalDataSource();
  const pokemonRepository = new PokemonRepository(pokemonLocalDataSource);
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  const paths = pokemonViewModel.findAll.map((pokemon) =>
    ({ params: { id: pokemon.id.toString() } })
  );

  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {
  const pokemonLocalDataSource = new PokemonLocalDataSource();
  const pokemonRepository = new PokemonRepository(pokemonLocalDataSource);
  const pokemonViewModel = await new PokemonViewModel().init(pokemonRepository);
  const pokemonModel = pokemonViewModel.findOne(params.id)!

  return {
    props: {
      pokemonModels: pokemonModel != undefined ? pokemonModel.toJson() : PokemonModel.dummy().toJson(),
    }
  }
}

export default PokemonPage;
