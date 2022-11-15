import Pokecard from './Pokecard';
import "./Pokedex.css";

/** Renders a sequence of Pokecard components from a provided array like:
 *  -props: pokemons
 * [
 *  {id: 4,   name: 'Charmander', type: 'fire',     baseExp: 62},
 *  {id: 7,   name: 'Squirtle',   type: 'water',    baseExp: 63},
 *  ...
 * ]
*/

function Pokedex({pokemon}) {
  return(
  <div>
    <h2 className="Pokedex-title">Pokedex</h2>
    {pokemon.map(p => (
    <Pokecard
      id = {p.id}
      name = {p.name}
      type = {p.type}
      baseExp = {p.baseExp}
    />))}
  </div>
  );
}

export default Pokedex;
