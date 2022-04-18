import { observer } from 'mobx-react';
import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import PokemonModel from '../../models/pokemon/pokemon.model';

type PokemonProps = {
  pokemonModel: PokemonModel;
}

function PokemonView({ pokemonModel }: PokemonProps) {
  
  if (!pokemonModel) return <></>

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'background.default' }}>
      <CardMedia
        component='img'
        height='180'
        image={pokemonModel.img}
        alt={pokemonModel.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' color='primary.main'>
          {pokemonModel.name}
        </Typography>
        <Typography variant='body2'>
          <span>Type: {pokemonModel.type.join(', ')}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default observer(PokemonView);
