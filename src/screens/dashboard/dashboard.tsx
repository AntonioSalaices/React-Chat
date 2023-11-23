

import { useGetAllPokemonsQuery } from "@Api/Core";
import { Canvas } from "./components/Canvas/Canvas";
import styles from './dashboard.module.scss';
import { List } from "@Components/Core";
import { AbilityResult } from "@Models/Core";
import pokebolaImage from '@Assets/images/pokebola.png';
import { useNavigate } from "react-router-dom";
import { translate } from "@Translate/translate";

const renderPokemon = (pokemonAbility: AbilityResult, index: number, onClickPokebola) => {


  return(
    <figure onClick={() => onClickPokebola(pokemonAbility.url)} key={index}>
      <img src={pokebolaImage} alt="pokebola image" width="100" height="100" />
      <figcaption className={styles.pokemon__labelImage}>{pokemonAbility.name}</figcaption>
    </figure>
  )
}
export function Dashboard() {
  const navigate = useNavigate();

  const { data, isLoading } = useGetAllPokemonsQuery(1); 
  console.log('data',  data)


  const onClickPokebola = (pokemonAbilityUrl: string) =>{
    const abilityNumber = pokemonAbilityUrl.split("/")[6];

    navigate('chat')
  }

  const title = translate('screens.pokemonList.header') ;
  
  return(
    <main className={styles.pokemon__container}>
      <header className={styles.pokemon__header}>
          <h1 className={styles.pokemon__headerTitle}>{title}</h1>
      </header>
      <section className="container">
          <List 
            isRow
            data={data?.results}
            isLoading={isLoading}
            renderItem={(pokemonAbility: AbilityResult, idx: number)=> renderPokemon(pokemonAbility, idx, onClickPokebola)}
          />
      </section>
    </main>
  )
}

Dashboard.displayName = 'Dashboard';


Muchas gracias por tus atenciones y guia, ha sido muy amable de tu parte

Seguiré las indicaciones que me das, seguimos en contacto Roxanne
