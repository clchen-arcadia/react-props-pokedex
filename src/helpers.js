
/** Function accepts an array of items.
 *  Function shuffles that array and deals it out to numHands.
 *  Function returns a 2-D array
 *  Example:
 *    ([A, B, C, D, E, F], 2) =>
 *        [[D, A, F], [E, B, C]]
 */
function shuffleAndDeal(items, numHands) {
  const shuffledItems = shuffleArray(items);
  return dealCards(shuffledItems, numHands);
}


/** Performs Fisher-Yates shuffle on input array and returns it */

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Function accepts an array cards, and "deals it out" to numHands.
 * Example:
 *  ([1, 2, 3, 4, 5, 6], 3) =>
 *      [[1, 2], [3, 4], [5, 6]]
 *
 *  ([1, 2, 3, 4, 5, 6, 7, 8], 3, true) =>
 *      [[1, 2, 7], [3, 4, 8], [5, 6]]
 *
 */

function dealCards(cards, numHands, dealOutExtras=false) {
  const minCards = Math.floor(cards.length / numHands); // 4

  const outputHands = [];
  let currentIdx = 0;

  for(let i = 0; i < numHands; i++) {
    outputHands.push(cards.slice(currentIdx, currentIdx + minCards));
    currentIdx += minCards;
  }

  if(dealOutExtras) {
    let handIdx = 0;
    for(let i = currentIdx; i < cards.length; i++) {
      outputHands[handIdx].push(cards[currentIdx]);
      currentIdx++;
      handIdx++;
    }
  }

  return outputHands;
}

/** Function accepts an array of Pokemon objects
 *  Like: [{id, name, type, baseExp}, ...]
 *  Function returns the sum of baseExp.
 */
function calcPokemonEXP(pokemonList) {
  let sum = 0;
  for(let pokemon of pokemonList){
    sum += pokemon.baseExp;
  }
  return sum;
}

export {shuffleAndDeal, calcPokemonEXP};
