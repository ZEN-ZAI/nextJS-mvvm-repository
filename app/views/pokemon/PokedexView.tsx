import { observer } from 'mobx-react';
import PokemonModel from '../../models/pokemon/pokemon.model';
import { ImageList, ImageListItem, ImageListItemBar, Button } from '@mui/material';
import Link from 'next/link';

type PokedexProps = {
  pokemonModels: PokemonModel[];
}

const PokedexView = ({ pokemonModels }: PokedexProps) => {
  return (
    <ImageList sx={{ width: 1000 }} cols={6} >
      {pokemonModels.map((item: PokemonModel) =>
      (
        <Button variant='text' color='primary'>
          <Link href={`/pokemon/${item.id}`} passHref>
            <ImageListItem key={item.img} >
              <img
                src={`${item.img}?w=250&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.name}
                subtitle={<span>Type: {item.type.join(', ')}</span>}
                position='below'
              />
            </ImageListItem>
          </Link>
        </Button>
      ))
      }
    </ImageList>
  );
}

export default observer(PokedexView);
