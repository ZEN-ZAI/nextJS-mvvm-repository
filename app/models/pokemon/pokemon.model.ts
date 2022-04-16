import { plainToInstance } from 'class-transformer';
import { Egg, EvolutionAttributes, IPokemonAttributes, Type } from './interfaces';

class PokemonModel {
  id!: number;
  num!: string;
  name!: string;
  img!: string;
  type!: Type[];
  height!: string;
  weight!: string;
  candy!: string;
  candyCount!: number;
  egg!: Egg;
  spawnChance!: number;
  avgSpawns!: number;
  spawnTime!: string;
  multipliers!: number[];
  weaknesses!: Type[];
  nextEvolution!: EvolutionAttributes[];
  prevEvolution!: EvolutionAttributes[];

  // constructor(
  //   id?: number,
  //   num?: string,
  //   name: string,
  //   img: string,
  //   type: Type[],
  //   height: string,
  //   weight: string,
  //   candy: string,
  //   candyCount: number,
  //   egg: Egg,
  //   spawnChance: number,
  //   avgSpawns: number,
  //   spawnTime: string,
  //   multipliers: number[],
  //   weaknesses: Type[],
  //   nextEvolution: EvolutionAttributes[],
  //   prevEvolution: EvolutionAttributes[]
  // ) {
  //   this.id = id;
  //   this.num = num;
  //   this.name = name;
  //   this.img = img;
  //   this.type = type;
  //   this.height = height;
  //   this.weight = weight;
  //   this.candy = candy;
  //   this.candyCount = candyCount;
  //   this.egg = egg;
  //   this.spawnChance = spawnChance;
  //   this.avgSpawns = avgSpawns;
  //   this.spawnTime = spawnTime;
  //   this.multipliers = multipliers;
  //   this.weaknesses = weaknesses;
  //   this.nextEvolution = nextEvolution;
  //   this.prevEvolution = prevEvolution;
  // }

  constructor(object: any){
    Object.assign(this, object);
  }

  public setName(name: string){
    this.name = name;
  }

  public static mock(): PokemonModel {
    const json = {
      "id": 0,
      "num": "0",
      "name": "ZEN",
      "img": "https://avatars.githubusercontent.com/u/26882240",
      "type": [
        "Dark"
      ],
      "height": "1.72 m",
      "weight": "92.0 kg",
      "candy": "None",
      "egg": "Not in Eggs",
      "spawn_chance": 0,
      "avg_spawns": 0,
      "spawn_time": "N/A",
      "multipliers": null,
      "weaknesses": [
        "Bug",
        "Fire",
        "Water"
      ]
    }
    return plainToInstance(PokemonModel, json);
  }

  public static fromJSON(json: Object): PokemonModel {
    return plainToInstance(PokemonModel, json);
    // let x = Object.create(PokemonModel.prototype);
    // return Object.assign(x, json);
  }

  public toRawJson() {
    return JSON.stringify(this);
  }

  public toJson() {
    return JSON.parse(this.toRawJson());
  }
}

export default PokemonModel;
