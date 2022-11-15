import './Pokecard.css';

const POKEMON_IMG_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

/** Shows a single Pokemon, with their name, image, and type.
 *
 *  -props: id, name, type, baseExp
 */

function Pokecard({id, name, type, baseExp}) {
  const pokemonImgSrc = `${POKEMON_IMG_BASE_URL}/${id}.png`
  return (
  <div className="Pokecard">
    <h4 className="Pokecard-name">{name}</h4>
    <img className="Pokecard-img" src={pokemonImgSrc} alt={name}></img>
    <p className="Pokecard-text">Type: {type}</p>
    <p className="Pokecard-text">EXP: {baseExp}</p>
  </div>
  );
}

export default Pokecard;
