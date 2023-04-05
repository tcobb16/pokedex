import React from "react";
import Pokecard from "./Pokecard";


function Pokedex(props) {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p >THIS HAND WINS!</p>;
  }

  return (
    <div >
      <h2 >Pokedex</h2>
      <div >
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;
