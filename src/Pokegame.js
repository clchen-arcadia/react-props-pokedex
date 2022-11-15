import './Pokegame.css';
import Pokedex from './Pokedex';
import {POKEMON_LIST} from './pokemon';
import {shuffleAndDeal, calcPokemonEXP} from './helpers';


/** Function renders a game of pokemon which is
 *  two instances of rendered Pokedex (two hands of 4 pokemon cards each)
 *  -props: pokemon
 *    array of pokemon objects like: [{id, name, type, baseExp}, ...]
 */
function Pokegame({pokemon = POKEMON_LIST}) {
  // arr of two arr's like [[hand1..], [hand2..]]
  const [handOne, handTwo] = shuffleAndDeal(pokemon, 2);
  const scoreOne = calcPokemonEXP(handOne);
  const scoreTwo = calcPokemonEXP(handTwo);

  // ties are currently handled by declaring playerOne the winner
  const isPlayerOneWinner = scoreOne >= scoreTwo;

  return (
    <div>
      <div className="Pokegame-player">Player 1</div>
      <div className="Pokegame-player">
        {
          isPlayerOneWinner
          ? "This Hand is the Winner!"
          : ""
        }
      </div>
      <Pokedex pokemon={handOne} />
      <div className="Pokegame-player">Player 2</div>
      <div className="Pokegame-player">
        {
          !isPlayerOneWinner
          ? "This Hand is the Winner!"
          : ""
        }
      </div>
      <Pokedex pokemon={handTwo} />
    </div>
  );
}

export default Pokegame;
