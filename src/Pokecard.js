import React from 'react';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';


function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;

  return (
      <div>
        <div>{ props.name }</div>
        <img src={imgSrc} />
        <div>Type: {props.type}</div>
        <div>EXP: {props.exp}</div>
      </div>
  );
}

export default Pokecard;