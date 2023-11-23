export interface IPokemonAbility {
  count: number;
  next: string;
  previous: string;
  results: AbilityResult[];
}

export interface AbilityResult {
  name: string;
  url: string;
}
