import { observer } from "mobx-react";
import PokemonModel from '../../models/pokemon/pokemon.model';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

type PokemonsProps = {
  pokemonModels: PokemonModel[];
}

const PokemonsView = ({ pokemonModels }: PokemonsProps) => {
  return (
    <ImageList sx={{ width: 1000 }} cols={6} >
      {pokemonModels.map((item: PokemonModel) =>
      (<ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.name}
          subtitle={<span>Type: {item.type.join(", ")}</span>}
          position="below"
        />
      </ImageListItem>))
      }
    </ImageList>
  );
}

export default observer(PokemonsView);
