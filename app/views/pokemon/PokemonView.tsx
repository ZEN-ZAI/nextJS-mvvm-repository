import { observer } from 'mobx-react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import PokemonModel from '../../models/pokemon/pokemon.model';

type PokemonProps = {
  pokemonModel: PokemonModel;
}

function PokemonView ({ pokemonModel }: PokemonProps) {

  if (!pokemonModel) return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component='img'
      height='140'
      image=''
      alt=''
    />
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        <span>Type: </span>
      </Typography>
    </CardContent>
  </Card>
  )

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={pokemonModel.img}
        alt={pokemonModel.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {pokemonModel.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <span>Type: {pokemonModel.type.join(', ')}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default observer(PokemonView);
