import { useEffect, useState } from 'react';
import IRepositoryStrategy from '../../repositories/interfaces/IStrategy';
import PokemonRepository from '../../repositories/pokemon/pokemon.repository';
import PokemonModel from '../../models/pokemon/pokemon.model';
import PokemonViewModel from '../../viewModels/pokemon/pokemon.viewModel';
import PokemonsView from '../../views/pokemon/PokemonsView';

type Props = {
  pokemonRepository: IRepositoryStrategy<PokemonModel>;
}

function PokemonController({ pokemonRepository }: Props) {
  const [data, setData] = useState<PokemonViewModel>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const pokedexRepository = new PokemonRepository(pokemonRepository);
    const pokemonModels: Promise<PokemonModel[]> = pokedexRepository.findAll();
    pokemonModels.then((pokemonModels: PokemonModel[]) => {
      const pokemonViewModel = new PokemonViewModel(pokemonModels);
      setData(pokemonViewModel);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <div>
      <PokemonsView pokemonModels={data.findAll} />
    </div>
  )
}

export default PokemonController;
