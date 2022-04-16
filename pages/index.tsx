import PokemonLocalRepository from '../app/repositories/pokemon/strategies/pokemon.repository.local';
import PokemonRemoteRepository from '../app/repositories/pokemon/strategies/pokemon.repository.remote';
import PokemonController from '../app/controllers/pokemon/pokemon.controller';
import OrganizationChartView from '../app/views/organizationChart/OrganizationChartView';

import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const Home: NextPage = () => {
  const pokemonLocalRepository = new PokemonLocalRepository();
  const pokemonRemoteRepository = new PokemonRemoteRepository();
  
  // return (
  //   <Card sx={{ width: '100%', height: '20%' }}>
  //     <div style={{ width: '100%', height: '100vh' }}>
  //       <OrganizationChartView />
  //     </div>
  //   </Card>
  // )

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Pokemon Local Repository</p>
        <PokemonController pokemonRepository={pokemonLocalRepository}/>
        {/* <p>Pokemon Remote Repository</p> */}
        {/* <PokemonController pokemonRepository={pokemonRemoteRepository}/> */}
        {/* <PokemonViewTest /> */}
      </Box>
    </Container>
  );
};

export default Home;
