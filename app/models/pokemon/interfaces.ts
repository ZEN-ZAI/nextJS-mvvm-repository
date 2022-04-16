export enum Type {
  Bug = 'Bug',
  Dark = 'Dark',
  Dragon = 'Dragon',
  Electric = 'Electric',
  Fairy = 'Fairy',
  Fighting = 'Fighting',
  Fire = 'Fire',
  Flying = 'Flying',
  Ghost = 'Ghost',
  Grass = 'Grass',
  Ground = 'Ground',
  Ice = 'Ice',
  Normal = 'Normal',
  Poison = 'Poison',
  Psychic = 'Psychic',
  Rock = 'Rock',
  Steel = 'Steel',
  Water = 'Water',
}

export enum Egg {
  NotInEggs = 'Not in Eggs',
  OmanyteCandy = 'Omanyte Candy',
  The10Km = '10 km',
  The2Km = '2 km',
  The5Km = '5 km',
}

export interface IPokemonAttributes {
  id: number;
  num: string;
  name: string;
  img: string;
  type: Type[];
  height: string;
  weight: string;
  candy: string;
  candyCount: number;
  egg: Egg;
  spawnChance: number;
  avgSpawns: number;
  spawnTime: string;
  multipliers: number[];
  weaknesses: Type[];
  nextEvolution?: EvolutionAttributes[];
  prevEvolution?: EvolutionAttributes[];
}

export interface EvolutionAttributes {
  num: string;
  name: string;
}