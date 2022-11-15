import Pokecard from './Pokecard';
import "./Pokedex.css";

/** Renders a sequence of Pokecard components from a provided array like:
 *  -props: pokemons
 * [
 *  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
 *  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
 *  ...
 * ]
*/

function Pokedex({pokedex}) {
  return(
  <div>
    <h2 className="Pokedex-title">Pokedex</h2>
    {pokedex.map(p => (
    <Pokecard
      id = {p.id}
      name = {p.name}
      type = {p.type}
      baseExp = {p.base_experience}
    />))}
  </div>
  );
}

export default Pokedex;
